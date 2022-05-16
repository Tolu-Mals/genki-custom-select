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
  const [showListBox, toggleListBox] = React.useState(false);
  const { getButtonProps, getListBoxProps } = useSelect(props);
  const clickAwayRef = React.useRef<HTMLDivElement>(null)

  const handleSelectToggle = () => toggleListBox(!showListBox)

  const handleClickAway = (e : any) => {
    if (clickAwayRef.current && !clickAwayRef.current.contains(e.target)) {
        handleSelectToggle()
      }
  }

  React.useEffect(() => {
    if(showListBox){
      document.addEventListener("click", (e) => handleClickAway(e), true)
    }
    return () => {
      document.removeEventListener("click", (e) => handleClickAway(e), true)
    }
  },[showListBox])
  

  const handleSelectItem = (item: string | number) => {
    setSelectedOption(item);
  };

  const attachPropsToOption = (child: any) =>
    React.cloneElement(child, {
      onClick: () => {
        handleSelectItem(child.props.children);
        handleSelectToggle()
      },
      selected: child.props.children === selectedOption,
    });

  const options = React.Children.map(props.children, attachPropsToOption);

  return (
    <Box ref={clickAwayRef}>
      <SelectButton {...getButtonProps} onClick={handleSelectToggle} selectedOption={selectedOption} />
      {showListBox && <SelectListBox {...getListBoxProps} options={options} />}
    </Box>
  );
};

export default Select;
