const { chakra } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;

const SelectListBox = (): JSX.Element => {

    const ListBox = styled(chakra.ul)`
        li {
            list-style: none;
            padding: 8px 12px;
        }

        li:first-child {
            padding-top: 12px;
        }

        li:last-child {
            padding-bottom: 12px;
        }



        width: 250px;
    `;

    const listBoxStyle = {
        light: {
            border: "1px solid #E2E8F0",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
            borderRadius: 6,
        },
        dark: {
            border: "1px solid #596375",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.29)",
            borderRadius: 6,
        }
    }
    return (
        <ListBox
        sx={listBoxStyle.dark}
        >
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ListBox>
    )
};

export default SelectListBox;