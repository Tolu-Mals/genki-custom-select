import React, { MutableRefObject, RefObject } from "react";
import { Box } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select";
import { SelectProps } from "../types";

type optionProps = {
  children: React.ReactNode;
  value: string | number;
  onClick?: () => {};
  selected?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLLIElement>;
  isListBoxOpen?: boolean;
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick, selected, onKeyDown, isListBoxOpen } =
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
      tabIndex={0}
      value={value}
      onKeyDown={onKeyDown}
      className={`${selected && "active"}`}
    >
      {children}
    </li>
  );
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();

  const [showListBox, toggleListBox] = React.useState(false);
  const { getButtonProps, getListBoxProps } = useSelect(props);
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
    //eslint-disable-nextline
  }, [showListBox]);

  const handleSelectItem = (item: string | number) => {
    setSelectedOption(item);
  };

  const handleKeyDown = (option: string | number) => (e: React.KeyboardEvent<HTMLLIElement>) => {
    console.log(e.key)
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedOption(option);
        handleSelectToggle();
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
      onKeyDown: handleKeyDown(child.props.children),
      isListBoxOpen: showListBox,
    });

  const options = React.Children.map(props.children, attachPropsToOption);
  const _options: Array<string | number> = [];

  options?.forEach((x) => _options.push(x.props.option));

  console.log(_options);

  return (
    <Box ref={clickAwayRef}>
      <SelectButton
        {...getButtonProps}
        onClick={handleSelectToggle}
        selectedOption={selectedOption}
      />
      {showListBox && <SelectListBox {...getListBoxProps} options={options} />}
    </Box>
  );
};

export default Select;
