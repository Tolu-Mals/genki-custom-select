import React from "react";

export type listBoxProps = {
    listBoxStyle?: object;
    hasTypeahead?: boolean;
    onChange?: () => void;
    options?: React.ReactNode;
    size?: "sm" | "md" | "lg";
  };
  
export type buttonProps = {
    placeholder?: string | number;
    selectedOption?: string | number;
    readOnly?: boolean;
    required?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "outlined" | "filled" | "flushed" | "unstyled";
    hideLabel?: boolean;
    customIcon?: React.ReactNode;
    name?: string;
    buttonStyle?: object;
    isDisabled?: boolean;
    isInvalid?: boolean;
    label?: string;
    errorBorderColor?: string;
    focusBorderColor?: string;
    fullWidth?: boolean;
    onClick?: () => void;
  };

  export type nativeProps = {
    name?: string;
    label?: string;
  }

  type withChildren = {
      children : React.ReactNode
  }
  export type selectProps = listBoxProps & buttonProps & withChildren 