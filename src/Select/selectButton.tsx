import { buttonProps } from "../types";
import styleObjects from "./styleObjects";

import { 
  Box,
  useMultiStyleConfig,
  useColorMode, 
  Text,
  createIcon,
  IconButton, 
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
 } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const CopyIcon = createIcon({
  displayName: "CopyIcon",
  viewBox: '0 0 24 24',
  path: (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".25" y=".25" width="23.5" height="23.5" rx="3.75" fill="#F5F4F4" stroke="#E2E8F0" stroke-width=".5"/><path fill="#F5F4F4" d="M5 5h14v14H5z"/><path d="M16.667 6.167h-5.834c-.643 0-1.166.523-1.166 1.166v2.334H7.333c-.643 0-1.166.523-1.166 1.166v5.834c0 .643.523 1.166 1.166 1.166h5.834c.643 0 1.166-.523 1.166-1.166v-2.334h2.334c.643 0 1.166-.523 1.166-1.166V7.333c0-.643-.523-1.166-1.166-1.166Zm-9.334 10.5v-5.834h5.834v5.834H7.334Zm9.334-3.5h-2.334v-2.334c0-.643-.523-1.166-1.166-1.166h-2.334V7.333h5.834v5.834Z" fill="#A6A6A6"/></svg>
  )
});

const {
  outlinedVariantDisabledStyle,
  flushedVariantDisabledStyle,
  outlinedVariantInvalidStyle,
  flushedVariantInvalidStyle,
  outlinedVariantReadOnlyStyle,
  flushedVariantReadOnlyStyle
} = styleObjects;

const SelectButton = (props: buttonProps) => {

  const { colorMode } = useColorMode();

  const mode: "light" | "dark" = colorMode;

  const {
  variant,
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
  selectId,
  buttonStyle
 } = props;

   type buttonState = {
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
  }
  
  const styles = useMultiStyleConfig('CustomSelect', { variant, size });
  
  const getButtonStateStyle = (buttonState: buttonState) => {

    if(buttonState.isDisabled) {
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {},  
        outlinedVariantDisabledStyle[mode]
        )

        else if (variant === "flushed") return Object.assign(
          {}, 
          flushedVariantDisabledStyle[mode]
          )
      }

    else if (buttonState.isReadOnly) {
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {}, 
        outlinedVariantReadOnlyStyle[mode]
      )

      else if(variant === "flushed") return Object.assign(
        {}, 
        flushedVariantReadOnlyStyle[mode]
      )
    }

    else if (buttonState.isInvalid){
      if(variant === "outlined" || variant === "filled") return Object.assign(
        {}, 
        outlinedVariantInvalidStyle[mode]
      )
      else if(variant === "flushed") return Object.assign(
        {}, 
        flushedVariantInvalidStyle[mode]
      )
    }
    return {}
  }

  const buttonStateStyles = getButtonStateStyle({ isRequired, isReadOnly, isDisabled, isInvalid });

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
        <Popover>
          <PopoverTrigger>
              <IconButton
              aria-label='copy value' 
              variant="unstyled" 
              size={size}
              onClick={copyText} 
              icon={<CopyIcon __css={styles.icon}  />} 
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
      size={size}
      icon={<CopyIcon __css={styles.icon} />} 
      /> )
    }

    else if (getButtonIconProps.customIcon) return getButtonIconProps.customIcon;

    return  (
    <ChevronDownIcon
    __css={styles.icon}
    />)
  }

  const buttonIcon = getButtonIcon({ isReadOnly, customIcon });

  const tabIndex: string | undefined = isDisabled ? "":"0";

  const customStyle = buttonStyle;
  const style = Object.assign({}, buttonStateStyles, customStyle);

  return (
    <Box
    onClick={onClick}
    mb={2}
    // @ts-ignore
    tabIndex={tabIndex}
    role="combobox"
    aria-expanded={String(showListBox)}
    aria-haspopup="listbox"
    id={selectId}
    aria-controls={selectId + '-listbox'}
    aria-invalid={isInvalid ? "true":"false"}
    aria-disabled={isDisabled ? "true":"false"}
    aria-readonly={isReadOnly ? "true":"false"}
    __css={styles.button}
    sx={style}
    >
      <Text>{selectedOption ?? placeholder}</Text>
      { buttonIcon }
    </Box>
  );
};

export default SelectButton;