import { ListBoxProps } from "../types"
import styleObjects from "./styleObjects";
const { chakra, useColorMode } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;


const { listBoxStyle, smListBoxStyle, mdListBoxStyle, lgListBoxStyle } = styleObjects;

const sizeMap = {
    sm: smListBoxStyle,
    md: mdListBoxStyle,
    lg: lgListBoxStyle
}

const SelectListBox = (props: ListBoxProps): JSX.Element => {
    const { colorMode } = useColorMode();
    const { options, size = "md" } = props;

    const mode: "light" | "dark" = colorMode;

    const style = Object.assign({}, listBoxStyle[mode], sizeMap[size])

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

    li:first-of-type {
        border-radius: 4px 4px 0px 0px;
    }

    li:last-of-type {
        border-radius: 0px 0px 4px 4px;
    }
    li:focus-visible {
        border: none;
        outline: none;
    }
`;

export default SelectListBox;