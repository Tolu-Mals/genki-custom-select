import { Box, chakra } from "@chakra-ui/react";
import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";

// const Label = chakra(label);

const Select = (props: any): JSX.Element => {
    return (
        <Box {...props}>
            <SelectButton />
            <SelectListBox />
        </Box>
    )
}

export default Select;