const { Flex, Text, useColorMode } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const styled = require("@emotion/styled").default;

import { ButtonProps } from "../types";
import styleObjects from "./styleObjects";

const {
  filledVariantStyle,
  flushedVariantStyle,
  outlinedVariantStyle,
  unstyledVariantStyle,
  smStyle,
  mdStyle,
  lgStyle
} = styleObjects;

const SelectButton = (props: ButtonProps) => {
  
  const { variant = "filled", size = "md" } = props;

  const variantMap = {
    filled: filledVariantStyle,
    flushed: flushedVariantStyle,
    outlined: outlinedVariantStyle,
    unstyled: unstyledVariantStyle,
  };


  const sizeMap = {
    sm: smStyle,
    md: mdStyle,
    lg: lgStyle
  }

  const buttonStyle = Object.assign(
    {},
    variantMap[variant].light,
    sizeMap[size].button,
  );

  return (
    <Flex sx={buttonStyle} justify="space-between" align="center" mb={2}>
      <Text>Select Something</Text>
      <ChevronDownIcon
        w={smStyle.icon.width}
        h={smStyle.icon.height}
        colors={buttonStyle.color}
      />
    </Flex>
  );
};

export default SelectButton;
