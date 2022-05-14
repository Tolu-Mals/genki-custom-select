const SelectButton = require("./selectButton").default;

const { Box, chakra } = require("@chakra-ui/react");

// const Label = chakra(label);

const Select = (props: any): JSX.Element => {
    return (
        <Box {...props}>
            <SelectButton />
        </Box>
    )
}

export default Select;