import React from "react";
import { Box, chakra, useColorMode, useMultiStyleConfig } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select";
import { selectProps } from "../types";
import styleObjects from "./styleObjects";
import { v4 as uuidv4 } from "uuid";

type optionProps = {
  children: React.ReactNode;
  value: string | number;
  onClick?: () => {};
  onChange?: () => {};
  selected?: boolean;
  active?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLLIElement>;
  isListBoxOpen?: boolean;
};

export const Option = (props: optionProps): JSX.Element => {
  const {
    children,
    value,
    onClick,
    onChange,
    selected,
    onKeyDown,
    isListBoxOpen,
    active,
  } = props;

  const listRef = React.useRef(null);
 
  React.useEffect(() => {
    if (listRef && isListBoxOpen) {
      const node = listRef.current as any;
      node.focus();
    }
  }, [listRef, isListBoxOpen]);

  return (
    <li
      ref={listRef}
      onClick={onClick}
      tabIndex={-1}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${selected && "active"} ${active && "current"}`}
      role="option"
      aria-selected={selected ? true : false}
    >
      {children}
    </li>
  );
};

export const Select = (props: selectProps): JSX.Element => {
  const { nativeProps, buttonProps, listBoxProps } = useSelect(props);
  const { size = "md", placeholder="", hideLabel } = buttonProps;
  const { name, label } = nativeProps;
  const { labelStyle } = buttonProps;
  const { value, defaultValue, onChange } = listBoxProps
  const { colorMode: mode } = useColorMode();


// ==================== STATES ==========================

  const isControlled = typeof value != 'undefined'
  const hasDefaultValue = typeof defaultValue != 'undefined'

  const [selectedOption, setSelectedOption] = React.useState<string>(hasDefaultValue ? defaultValue : placeholder);
  const [activeOption, setActiveOption] = React.useState<string>();
  const [optionIndex, setOptionIndex] = React.useState<number>(-1);
  const [showListBox, toggleListBox] = React.useState(false);

  const _options: Array<string> = [];
  const clickAwayRef = React.useRef<HTMLDivElement>(null);
  const selectId = "select-" + uuidv4();
  const listBoxId = selectId + "-listbox";
// ===========================================================



// ======================== EFFECTS ==========================

  React.useEffect(() => {
    if (showListBox) {
      document.addEventListener("click", (e) => handleClickAway(e), true);
      document.addEventListener("keydown", (e) => handleEscapeClick(e), true);
    }
    return () => {
      document.removeEventListener("click", (e) => handleClickAway(e), true);
      document.removeEventListener(
        "keydown",
        (e) => handleEscapeClick(e),
        true
      );
    };
    //eslint-disable-next-line
  }, [showListBox]);

  React.useEffect(() => {
    setOptionIndex(_options.indexOf(activeOption!));
    // eslint-disable-next-line
  }, [activeOption]);

// ===============================================================



 // ====================== HANDLERS ==============================

 const handleOnchange = (option : string) => {
   if(onChange){
     onChange(option)
   }

   if (!isControlled){
     setSelectedOption(option)
   }
 }

 const handleSelectToggle = () => {
  toggleListBox(!showListBox);
};

const handleClickAway = (e: any) => {
  if (clickAwayRef.current && !clickAwayRef.current.contains(e.target)) {
    handleSelectToggle();
  }
};

  const handleEscapeClick = (e: any) => {
    if (e.key === "Escape") {
      handleSelectToggle();
    }
  };

  const handleSelectItem = (item: string) => {
    setSelectedOption(item);
  };

  const handleKeyBoardNav = (index: number, direction: string) => {
    switch (direction) {
      case "up":
        if (index > 0) {
          index--;
          setActiveOption(_options[index]);
        }
        break;
      case "down":
        if (index < _options.length - 1) {
          index++;
          setActiveOption(_options[index]);
        }
        break;
      default:
        break;
    }
  };

  const handleKeyDown = () => (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case "SpaceBar":
      case "Enter":
        handleSelectToggle();
        setSelectedOption(activeOption!);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        handleKeyBoardNav(optionIndex, "up");
        break;
      case "ArrowDown":
      case "ArrowRight":
        handleKeyBoardNav(optionIndex, "down");
        break;
      default:
        const jumpToOption = _options.find((o) => o.charAt(0) === e.key);
        jumpToOption && setActiveOption(jumpToOption);
        break;
    }
  };

  const handleButtonClick = () => {
    if(!props.readOnly && !props.isDisabled && !props.isInvalid) {
      handleSelectToggle()
    }
  }

// =====================================================================



  const attachPropsToOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.children);
        handleSelectToggle();
      },
      onChange: () => handleOnchange(child.props.children),
      selected: child.props.children === selectedOption,
      option: child.props.children,
      onKeyDown: handleKeyDown(),
      isListBoxOpen: showListBox,
      active: child.props.children === activeOption,
    });
  const options = React.Children.map(props.children, attachPropsToOption);
  options?.forEach((x) => _options.push(x.props.option));

  

  const styles = useMultiStyleConfig('CustomSelect', { size, variant: "outlined"});

  const customLabelStyle = labelStyle;

  return (
    <Box ref={clickAwayRef} pos="relative">
      { label ? <chakra.label __css={styles.label} hidden={hideLabel ? true:false} sx={customLabelStyle}>{ label }</chakra.label>:<chakra.label __css={styles.label} hidden htmlFor={selectId}>{props.placeholder}</chakra.label> }

      <SelectButton 
      {...buttonProps} 
      onClick={handleButtonClick}
      selectedOption={selectedOption}
      showListBox={showListBox}
      selectId={selectId}
      />

      <SelectListBox {...listBoxProps} show={showListBox} listBoxId={listBoxId} options={options} />

      <chakra.input
        value={selectedOption}
        name={name}
        placeholder="Test"
        sx={{
          display: "none",
          visibility: "hidden",
        }}
        aria-hidden="true"
      />
    </Box>
  );
};
