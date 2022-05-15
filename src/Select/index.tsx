import React from "react";
import { Box } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select";
import { SelectProps } from "../types";

type optionProps = {
  children: React.ReactNode;
  value: string | number;
  onClick?: () => {};
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick } = props;
  return (
    <li onClick={onClick} value={value}>
      {children}
    </li>
  );
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();
  const [showListBox, toggleListBox] = React.useState(false);
  const { getButtonProps, getListBoxProps } = useSelect(props);

  const handleSelectItem = (item: string | number) => {
    setSelectedOption(item);
  };

  const attachOnclicktoOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.children);
      },
    });

  const options = React.Children.map(props.children, attachOnclicktoOption);

  return (
    <Box>
      <SelectButton {...getButtonProps} onClick={() => toggleListBox(!showListBox)} selectedOption={selectedOption} />
      {showListBox && <SelectListBox {...getListBoxProps} options={options} />}
    </Box>
  );
};

export default Select;
