import React from "react";
import { chakra, useColorMode } from "@chakra-ui/react";
import { listBoxProps } from "../types"
import styleObjects from "./styleObjects";
import { css } from "@emotion/react";



const { listBoxStyle, smListBoxStyle, mdListBoxStyle, lgListBoxStyle } = styleObjects;

const sizeMap = {
    sm: smListBoxStyle,
    md: mdListBoxStyle,
    lg: lgListBoxStyle
}

const SelectListBox = React.forwardRef((props: listBoxProps) => {
    const { colorMode } = useColorMode();
    const { options, size = "md", ref } = props;

    const mode: "light" | "dark" = colorMode;

    const style = Object.assign({}, listBoxStyle[mode], sizeMap[size])

    return (
        <chakra.ul
        sx={style}
        css={css`
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

            li:focus {
                outline: none;
            }

            &::-webkit-scrollbar {
            width: 6px;
            }
            
            &::-webkit-scrollbar-thumb {
            background-color: #d4d4d4;
            border-radius: 7px;
            marginRight: 8px;
            }

            position: absolute;
            max-height: 170px;
            width: 100%;
            overflow-y: auto;
            animation-name: fadeDropIn;
            animation-duration: 0.2s;
            animation-timing-function: ease-out;

            &.fadeOut {
                animation-name: fadeDropIn;
                animation-duration: 0.8s;
                animation-iteration-count: infinite;
                animation-direction: reverse;

            }

            @keyframes fadeDropIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }
        `}
        tabIndex={-1}
        id={props.listBoxId}
        role="listbox"
        ref={ref}
        >
           {options}
        </chakra.ul>
    )
});


export default SelectListBox;