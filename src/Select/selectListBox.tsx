
import React from "react";
import { listBoxProps } from "../types"
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";
import styled from "@emotion/styled";


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

export default SelectListBox;