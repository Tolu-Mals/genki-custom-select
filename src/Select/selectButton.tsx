import { ButtonProps } from "../types";
import styleObjects from "./styleObjects";

const { Flex, Text, useColorMode } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const {
  filledVariantStyle,
  flushedVariantStyle,
  outlinedVariantStyle,
  unstyledVariantStyle,
  smButtonStyle,
  mdButtonStyle,
  lgButtonStyle,
  buttonDisabledStyle,
  outlinedVariantInvalidStyle,
  flushedVariantInvalidStyle
} = styleObjects;

const SelectButton = (props: ButtonProps) => {

  const { colorMode } = useColorMode();
  const { variant = "filled", size = "md", placeholder, selectedOption, required, readOnly, isDisabled, isInvalid } = props;

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

   type buttonState = {
    required?: boolean;
    readOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
  }
  
  const mode: "light" | "dark" = colorMode;

  const getButtonStyle = (buttonState: buttonState) => {

    if(buttonState.isDisabled) return Object.assign(
      {}, 
      sizeMap[size].button,
      variantMap[variant][mode], 
      buttonDisabledStyle[mode]
    );

    else if (buttonState.isInvalid){
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {}, 
        sizeMap[size].button,
        variantMap[variant][mode], 
        outlinedVariantInvalidStyle[mode]
      )
      else if(variant === "flushed") return  Object.assign(
        {}, 
        sizeMap[size].button,
        variantMap[variant][mode], 
        flushedVariantInvalidStyle[mode]
      )
    }

    return Object.assign(
      {}, 
      sizeMap[size].button, 
      variantMap[variant][mode], 
    );

  }

  const buttonStyle = getButtonStyle({ required, readOnly, isDisabled, isInvalid });

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