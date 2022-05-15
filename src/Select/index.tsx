import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select";
import { SelectProps } from "../types";

// const Label = chakra(label);
type optionProps = {
  children: React.ReactNode;
  value: string | number;
  onClick?: () => {}
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick } = props;
  return <li onClick={onClick} value={value}>{children}</li>;
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();
  const { getButtonProps, getListBoxProps } = useSelect(props);

  const handleSelectItem = (item: any) => {
    setSelectedOption(item);
  };

  const attachOnclicktoOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.value);
      },
    });

  const options = React.Children.map(props.children, attachOnclicktoOption);

  return (
    <Box>
      <SelectButton {...getButtonProps} selectedOption={selectedOption} />
      <SelectListBox {...getListBoxProps} options={options} />
    </Box>
  );
};

export default Select;
