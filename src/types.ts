export type ListBoxProps = {
    listBoxStyle?: object;
    hasTypeahead?: boolean;
    onChange?: () => void;
  };
  
  export type ButtonProps = {
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "filled" | "flushed" | "unstyled";
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