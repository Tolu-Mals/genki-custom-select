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
  selected?: boolean;
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick, selected } = props;
  return <li onClick={onClick} value={value} className={`${selected && 'active'}`}>{children}</li>;
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();
  const [ isInvalid, setIsInvalid ] = React.useState<boolean>(true);
  const { getButtonProps, getListBoxProps } = useSelect(props);

  const handleSelectItem = (item: string | number) => {
    setSelectedOption(item);
  };

  const attachOnclicktoOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.children);
      },
      selected: (child.props.children === selectedOption) ? true:false,
    });

  const options = React.Children.map(props.children, attachOnclicktoOption);

  return (
    <Box>
      <SelectButton 
      {...getButtonProps} 
      selectedOption={selectedOption} 
      isInvalid={isInvalid}
      />
      <SelectListBox {...getListBoxProps} options={options} />
    </Box>
  );
};

export default Select;
