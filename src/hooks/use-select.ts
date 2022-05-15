import { ListBoxProps, ButtonProps } from '../types';

export type Options = ListBoxProps & ButtonProps

type UseSelectReturn = {
    getButtonProps: ButtonProps,
    getListBoxProps: ListBoxProps
}

export const useSelect = (options: Options) : UseSelectReturn => {

  const {
    placeholder,
    readOnly,
    required,
    size,
    variant,
    hideLabel,
    icon,
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
    icon,
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
    onChange
  };

  return {getButtonProps, getListBoxProps}
};
