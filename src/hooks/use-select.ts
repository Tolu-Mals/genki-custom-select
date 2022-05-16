import { ListBoxProps, ButtonProps, SelectProps } from '../types';


type UseSelectReturn = {
    getButtonProps: ButtonProps,
    getListBoxProps: ListBoxProps
}

export const useSelect = (options: SelectProps) : UseSelectReturn => {

  const {
    placeholder,
    readOnly,
    required,
    size,
    variant,
    hideLabel,
    customIcon,
    name,
    buttonStyle,
    isDisabled,
    label,
    errorBorderColor,
    focusBorderColor,
    fullWidth,
    listBoxStyle,
    hasTypeahead,
    onChange
  } = options;

  const getButtonProps: ButtonProps = {
    placeholder,
    readOnly,
    required,
    size,
    variant,
    hideLabel,
    customIcon,
    name,
    buttonStyle,
    isDisabled,
    label,
    errorBorderColor,
    focusBorderColor,
    fullWidth,
  };

  const getListBoxProps: ListBoxProps = {
    listBoxStyle,
    hasTypeahead,
    onChange,
    size
  };

  return {getButtonProps, getListBoxProps}
};
