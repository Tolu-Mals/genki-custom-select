import { buttonProps } from "../types";
import styleObjects from "./styleObjects";

const { 
  Flex,
  Text,
  useColorMode,
  createIcon,
  IconButton, 
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
 } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const CopyIcon = createIcon({
  displayName: "CopyIcon",
  viewBox: '0 0 24 24',
  path: (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".25" y=".25" width="23.5" height="23.5" rx="3.75" fill="#F5F4F4" stroke="#E2E8F0" stroke-width=".5"/><path fill="#F5F4F4" d="M5 5h14v14H5z"/><path d="M16.667 6.167h-5.834c-.643 0-1.166.523-1.166 1.166v2.334H7.333c-.643 0-1.166.523-1.166 1.166v5.834c0 .643.523 1.166 1.166 1.166h5.834c.643 0 1.166-.523 1.166-1.166v-2.334h2.334c.643 0 1.166-.523 1.166-1.166V7.333c0-.643-.523-1.166-1.166-1.166Zm-9.334 10.5v-5.834h5.834v5.834H7.334Zm9.334-3.5h-2.334v-2.334c0-.643-.523-1.166-1.166-1.166h-2.334V7.333h5.834v5.834Z" fill="#A6A6A6"/></svg>
  )
});

const {
  filledVariantStyle,
  flushedVariantStyle,
  outlinedVariantStyle,
  unstyledVariantStyle,
  smButtonStyle,
  mdButtonStyle,
  lgButtonStyle,
  outlinedVariantDisabledStyle,
  flushedVariantDisabledStyle,
  outlinedVariantInvalidStyle,
  flushedVariantInvalidStyle,
  outlinedVariantReadOnlyStyle,
  flushedVariantReadOnlyStyle
} = styleObjects;

const SelectButton = (props: buttonProps) => {

  const { colorMode } = useColorMode();
  const {
  variant = "filled",
  size = "md",
  placeholder,
  selectedOption,
  onClick,
  required: isRequired,
  readOnly: isReadOnly,
  isDisabled,
  isInvalid,
  customIcon,
  showListBox,
  selectId
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

  const iconSizeMap = {
    sm: 6,
    md: 8,
    lg: 10
  }

   type buttonState = {
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
  }
  
  const mode: "light" | "dark" = colorMode;

  const getButtonStyle = (buttonState: buttonState) => {

    if(buttonState.isDisabled) {
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {}, 
        sizeMap[size].button,
        variantMap[variant][mode], 
        outlinedVariantDisabledStyle[mode]
        )

        else if (variant === "flushed") return Object.assign(
          {}, 
          sizeMap[size].button,
          variantMap[variant][mode], 
          flushedVariantDisabledStyle[mode]
          )
      }

    else if (buttonState.isReadOnly) {
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {}, 
        sizeMap[size].button,
        variantMap[variant][mode], 
        outlinedVariantReadOnlyStyle[mode]
      )

      else if(variant === "flushed") return  Object.assign(
        {}, 
        sizeMap[size].button,
        variantMap[variant][mode], 
        flushedVariantReadOnlyStyle[mode]
      )
    }

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

  type getButtonIconProps = {
    isReadOnly?: boolean;
    customIcon?: any;
  }

  const copyText = () => {
    if(selectedOption !== undefined) {
      navigator.clipboard.writeText(String(selectedOption));

    }
  }

  const getButtonIcon = ( getButtonIconProps: getButtonIconProps) => {
    if(getButtonIconProps.isReadOnly){
      return selectedOption ? (
        
        <Popover width={8}>
          <PopoverTrigger>
              <IconButton
              aria-label='copy value' 
              variant="unstyled" 
              size={iconSizeMap[size]}
              onClick={copyText} 
              icon={<CopyIcon boxSize={iconSizeMap[size]} />} 
              /> 
          </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Text>Copied!</Text>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      ): ( <IconButton
      aria-label='copy value' 
      variant="unstyled" 
      size={iconSizeMap[size]}
      icon={<CopyIcon boxSize={iconSizeMap[size]} />} 
      /> )
    }

    else if (getButtonIconProps.customIcon) return getButtonIconProps.customIcon;

    return  (
    <ChevronDownIcon
    boxSize={iconSizeMap[size]}
    colors={buttonStyle.color}
    /> )
  }

  const buttonStyle = getButtonStyle({ isRequired, isReadOnly, isDisabled, isInvalid });

  const buttonIcon = getButtonIcon({ isReadOnly, customIcon });



  return (
    <Flex
    onClick={onClick}
    sx={buttonStyle} 
    justify="space-between"
    align="center" mb={2}
    tabIndex={isDisabled ? null:"0"}
    role="combobox"
    aria-expanded={String(showListBox)}
    aria-haspopup="listbox"
    id={selectId}
    aria-controls={selectId + '-listbox'}
    aria-invalid={isInvalid ? "true":"false"}
    aria-disabled={isDisabled ? "true":"false"}
    aria-readonly={isReadOnly ? "true":"false"}
    >
      <Text>{selectedOption ?? placeholder}</Text>
      { buttonIcon }
    </Flex>
  );
};

export default SelectButton;