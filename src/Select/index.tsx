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
};

export const Option = (props: optionProps): JSX.Element => {
  const { children, value, onClick, selected } = props;
  return <li onClick={onClick} value={value} className={`${selected && 'active'}`}>{children}</li>;
};

const Select = (props: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<string | number>();
  const [ isInvalid, setIsInvalid ] = React.useState<boolean>(false);
  const { getButtonProps, getListBoxProps } = useSelect(props);
  const { colorMode: mode } = useColorMode();

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

  const { labelStyle, labelSizes } = styleObjects;
  const { size = "md" } = getButtonProps;
  

  const labelSx = Object.assign({}, labelStyle[mode], labelSizes[size] );

  return (
    <Box>
      { props.label ? <chakra.label sx={labelSx}>{ props.label }</chakra.label>:<chakra.label sx={labelSx}>{props.placeholder}</chakra.label> }
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
