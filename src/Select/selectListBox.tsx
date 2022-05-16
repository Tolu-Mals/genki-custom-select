import { ListBoxProps } from "../types"
import styleObjects from "./styleObjects";
const { chakra } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;


const { listBoxStyle, smListBoxStyle, mdListBoxStyle, lgListBoxStyle } = styleObjects;

const sizeMap = {
    sm: smListBoxStyle,
    md: mdListBoxStyle,
    lg: lgListBoxStyle
}

const SelectListBox = (props: ListBoxProps): JSX.Element => {
    const { options, size = "md" } = props

    const style = Object.assign({}, listBoxStyle.light, sizeMap[size])

    return (
        <ListBox
        sx={style}
        tabIndex={-1}
        >
           {options}
        </ListBox>
    )
};

const ListBox = styled(chakra.ul)`
li {
    list-style: none;
}

li:hover {
    cursor: pointer;
}
`;

export default SelectListBox;