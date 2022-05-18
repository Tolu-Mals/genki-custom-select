import React from "react";

type listBoxAnimation = {
  initial: string;
  animate: string;
}
export type listBoxProps = {
    listBoxStyle?: object;
    hasTypeahead?: boolean;
    onChange?: (e: any) => void;
    value?: string | number;
    defaultValue?: string;
    options?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    listBoxId?: string;
    className?: string;
    show?: boolean;
  };
  
export type buttonProps = {
    placeholder?: string;
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
    showListBox?: boolean;
    selectId?: string;
  };

  export type nativeProps = {
    name?: string;
    label?: string;
  }

  type withChildren = {
      children?: React.ReactNode
  }
  export type selectProps = listBoxProps & buttonProps & withChildren 