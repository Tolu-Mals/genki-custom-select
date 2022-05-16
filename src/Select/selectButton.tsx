import { Box } from "@chakra-ui/react";
import { ButtonProps } from "../types";
import styleObjects from "./styleObjects";

const { Flex, Text } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const {
  filledVariantStyle,
  flushedVariantStyle,
  outlinedVariantStyle,
  unstyledVariantStyle,
  smButtonStyle,
  mdButtonStyle,
  lgButtonStyle
} = styleObjects;

const SelectButton = (props: ButtonProps) => {
  const {
    variant = "filled",
    size = "md",
    placeholder,
    selectedOption,
    onClick,
  } = props;

  const variantMap = {
    filled: filledVariantStyle,
    flushed: flushedVariantStyle,
    outlined: outlinedVariantStyle,
    unstyled: unstyledVariantStyle,
  };

  const sizeMap = {
    sm: smButtonStyle,
    md: mdButtonStyle,
    lg: lgButtonStyle
  }

  const buttonStyle = Object.assign(
    {},
    variantMap[variant].light,
    sizeMap[size].button,
  );

  return (
    <Flex onClick={onClick} sx={buttonStyle} justify="space-between" align="center" mb={2} tabIndex="0">
      <Text color="black">{selectedOption ?? placeholder}</Text>
      <ChevronDownIcon
        w={sizeMap[size].icon.width}
        h={sizeMap[size].icon.height}
        colors={buttonStyle.color}
      />
    </Flex>
  );
};

export default SelectButton;