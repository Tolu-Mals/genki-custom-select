import React, { useEffect } from "react";
import { listBoxProps } from "../types"
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
const { chakra, useMultiStyleConfig } = require("@chakra-ui/react");
const styled = require("@emotion/styled").default;

const SelectListBox = (props: listBoxProps) => {
    const { options, size = "md", show } = props;
    const styles = useMultiStyleConfig('CustomSelect', { size, variant: "outlined"});

    const variants = {
        fadeInInitial: { opacity: 0, y: "-10px", transition: { duration: 0.2 } },
        fadeIn: { opacity: 1, y: "0px", transition: { duration: 0.2 } },
        fadeOutInitial: { opacity: 1, y: "0px", transition: { duration: 0.2 } },
        fadeOut: { opacity: 0, y: "-10px", transition: { duration: 0.2 } },
      }

    return (
        <AnimatePresence>
            { show && (
                <chakra.ul
                as={motion.div}
                initial="fadeInInitial"
                animate="fadeIn"
                exit="fadeOut"
                key="listbox"
                variants={variants}
                __css={styles.listbox}
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
                `}
                tabIndex="-1"
                id={props.listBoxId}
                role="listbox"
                >
                   {options}
                </chakra.ul>
            )}
        </AnimatePresence>
    );
    
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

    .fadeOut {
        animation-name: fadeDropIn;
        animation-duration: 0.2s;
        animation-timing-function: ease-out;
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
`;

export default SelectListBox;