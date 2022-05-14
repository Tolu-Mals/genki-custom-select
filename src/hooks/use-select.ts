
type ListBoxProps = {
  listBoxStyle?: object;
  hasTypeahead?: boolean;
  onChange?: () => void;
};

type ButtonProps = {
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  hideLabel?: boolean;
  icon?: React.ReactNode;
  name?: string;
  buttonStyle?: object;
  isDisabled?: boolean;
  label?: string;
  errorBorderColor?: string;
  focusBorderColor?: string;
  fullWidth?: boolean;
};

type Options = ListBoxProps & ButtonProps

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
