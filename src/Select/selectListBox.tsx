import { ListBoxProps } from "../types"
import styleObjects from "./styleObjects";
const { chakra } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;


const { listBoxStyle } = styleObjects

const SelectListBox = (props: ListBoxProps): JSX.Element => {
    const { options } = props
    return (
        <ListBox
        sx={listBoxStyle.light}
        >
           {options}
        </ListBox>
    )
};




const ListBox = styled(chakra.ul)`
li {
    list-style: none;
    padding: 8px 12px;
}

li:first-of-type {
    padding-top: 12px;
}

li:last-of-type {
    padding-bottom: 12px;
}

li:hover {
    background-color:
}

width: 250px;
`;

export default SelectListBox;