const { chakra } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;
import { ListBoxProps } from "../types"
import styleObjects from "./styleObjects";

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

li:first-child {
    padding-top: 12px;
}

li:last-child {
    padding-bottom: 12px;
}

li:hover {
    background-color:
}

width: 250px;
`;

export default SelectListBox;