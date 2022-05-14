const SelectButton = require("./selectButton").default;
const SelectListBox = require("./selectListBox").default;

const { Box, chakra } = require("@chakra-ui/react");

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