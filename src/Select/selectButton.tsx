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
  lgButtonStyle,
  buttonDisabledStyle
} = styleObjects;

const SelectButton = (props: ButtonProps) => {
  
  const { variant = "filled", size = "md", placeholder, selectedOption, isDisabled } = props;

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

  const buttonStyle = isDisabled ? Object.assign(
    {},
    variantMap[variant].light,
    sizeMap[size].button,
    buttonDisabledStyle.light
  ):Object.assign(
    {},
    variantMap[variant].light,
    sizeMap[size].button,
  );


  return (
    <Flex 
    sx={buttonStyle} 
    justify="space-between"
    align="center" mb={2}
    tabIndex={isDisabled ? null:"0"}
    >
      <Text>{selectedOption ?? placeholder}</Text>
      <ChevronDownIcon
        w={sizeMap[size].icon.width}
        h={sizeMap[size].icon.height}
        colors={buttonStyle.color}
      />
    </Flex>
  );
};

export default SelectButton;