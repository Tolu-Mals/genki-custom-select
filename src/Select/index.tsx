import React from "react";
import { Box, chakra, useColorMode } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select";
import { SelectProps } from "../types";
import styleObjects from "./styleObjects";

type optionProps = {
  children: React.ReactNode;
  value: string | number;
  onClick?: () => {};
  selected?: boolean;
  active?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLLIElement>;
  isListBoxOpen?: boolean;
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick, selected, onKeyDown, isListBoxOpen, active } =
    props;

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
      onKeyDown={onKeyDown}
      className={`${selected && "active"} ${active && "current"}` }
    >
      {children}
    </li>
  );
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();
  const [activeOption, setActiveOption] = React.useState<string | number>();
  const [optionIndex, setOptionIndex] = React.useState<number>(-1)
  const [showListBox, toggleListBox] = React.useState(false);
  const _options: Array<string | number> = [];
  const clickAwayRef = React.useRef<HTMLDivElement>(null);

  const handleSelectToggle = () => toggleListBox(!showListBox);

  const handleClickAway = (e: any) => {
    if (clickAwayRef.current && !clickAwayRef.current.contains(e.target)) {
      handleSelectToggle();
    }
  };

  React.useEffect(() => {
    if (showListBox) {
      document.addEventListener("click", (e) => handleClickAway(e), true);
    }
    return () => {
      document.removeEventListener("click", (e) => handleClickAway(e), true);
    };
    //eslint-disable-next-line
  }, [showListBox]);

  React.useEffect(() => {
    setOptionIndex(_options.indexOf(activeOption!))
   
  }, [activeOption])
  
  const [ isInvalid, setIsInvalid ] = React.useState<boolean>(false);
  const { getButtonProps, getListBoxProps } = useSelect(props);
  const { colorMode: mode } = useColorMode();

  const handleSelectItem = (item: string | number) => {
    setSelectedOption(item);
  };

  const handleKeyBoardNav = (index : number, direction: string) => {
    switch (direction) {
      case "up":
        if(index > 0){
          index--
          setActiveOption(_options[index]);
        }else {
          setActiveOption(_options[_options.length - 1]);
        }
        break;
      case "down":
        if(index < _options.length){
          index++
          setActiveOption(_options[index]);
        }else {
          setActiveOption(_options[0]);
        }
        break;
      default:
        break;
    }
  }

  const handleKeyDown = () => (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case "SpaceBar":
      case "Enter":
        handleSelectToggle();
        setSelectedOption(activeOption)
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
        break;
    }
  };

  const attachPropsToOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.children);
        handleSelectToggle();
      },
      selected: child.props.children === selectedOption,
      option: child.props.children,
      onKeyDown: handleKeyDown(),
      isListBoxOpen: showListBox,
      active:  child.props.children === activeOption
    });

  const options = React.Children.map(props.children, attachPropsToOption);

  options?.forEach((x) => _options.push(x.props.option));


  const { labelStyle, labelSizes } = styleObjects;
  const { size = "md" } = getButtonProps;
  

  const labelSx = Object.assign({}, labelStyle[mode], labelSizes[size] );

  return (
    <Box ref={clickAwayRef}>
      { props.label ? <chakra.label sx={labelSx}>{ props.label }</chakra.label>:<chakra.label sx={labelSx}>{props.placeholder}</chakra.label> }
      <SelectButton 
      {...getButtonProps} 
      onClick={handleSelectToggle}
      selectedOption={selectedOption} 
      isInvalid={isInvalid}
      />
      {showListBox && <SelectListBox {...getListBoxProps} options={options} />}
    </Box>
  );
};

export default Select;
