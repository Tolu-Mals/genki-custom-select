import { Box, chakra } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";
import { useSelect } from "../hooks/use-select"

// const Label = chakra(label);

const Select = (props: any): JSX.Element => {
    const { getButtonProps, getListBoxProps} = useSelect(props)
    return (
        <Box>
            <SelectButton {...getButtonProps}/>
            <SelectListBox {...getListBoxProps}/>
        </Box>
    )
}

export default Select;