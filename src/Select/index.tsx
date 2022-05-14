import SelectButton from "./selectButton";
import SelectListBox from "./selectListBox";

const { Box, chakra } = require("@chakra-ui/react");

const Select = (props: any): JSX.Element => {
    return (
        <Box {...props}>
            <SelectButton />
            <SelectListBox />
        </Box>
    )
}

export default Select;