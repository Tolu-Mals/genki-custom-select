export type ListBoxProps = {
    listBoxStyle?: object;
    hasTypeahead?: boolean;
    onChange?: () => void;
    options?: React.ReactNode;
    size?: "sm" | "md" | "lg";
  };
  
export type ButtonProps = {
    placeholder?: string;
    selectedOption?: string | number;
    readOnly?: boolean;
    required?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "filled" | "flushed" | "unstyled";
    hideLabel?: boolean;
    icon?: React.ReactNode;
    name?: string;
    buttonStyle?: object;
    isDisabled?: boolean;
    isInvalid?: boolean;
    label?: string;
    errorBorderColor?: string;
    focusBorderColor?: string;
    fullWidth?: boolean;
  };

  type WithChildren = {
      children : React.ReactNode
  }
  export type SelectProps = ListBoxProps & ButtonProps & WithChildren 