import { nativeProps, listBoxProps, buttonProps, selectProps } from '../types';

type UseSelectReturn = {
    nativeProps: nativeProps,
    buttonProps: buttonProps,
    listBoxProps: listBoxProps
}

export const useSelect = (options: selectProps) : UseSelectReturn => {

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
    onChange,
    value,
    defaultValue
  } = options;

  const buttonProps: buttonProps = {
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

  const listBoxProps: listBoxProps = {
    listBoxStyle,
    hasTypeahead,
    onChange,
    value,
    defaultValue,
    size
  };

  const nativeProps: nativeProps = {
    name,
    label
  }

  return { nativeProps, buttonProps, listBoxProps }
};
