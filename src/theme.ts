import { mode } from "@chakra-ui/theme-tools";
import styleObjects from './Select/styleObjects';
import { extendTheme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const {
  filledVariantStyle,
  outlinedVariantStyle,
  flushedVariantStyle,
  unstyledVariantStyle,
  smButtonStyle,
  mdButtonStyle,
  lgButtonStyle,
  listBoxStyle,
  smListBoxStyle,
  mdListBoxStyle,
  lgListBoxStyle,
  labelSizes,
  labelStyle
} = styleObjects;



const CustomSelect: ComponentStyleConfig = {
  parts: ['button', 'listbox', 'icon', 'label'],
  baseStyle: {
    button: {
      borderRadius: "6px",
      outline: "none",
      transition: "all 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listbox: {
      zIndex: "1",
      borderRadius: 6,
    },
    label: {
      fontWeight: "500",
      display: "inline-block"
    }
  },
  sizes: {
    sm: {
      button: smButtonStyle.button,
      listbox: smListBoxStyle,
      icon: smButtonStyle.icon,
      label: {
        fontSize: "0.875rem",
        marginBottom: "0.25rem"
      }
    },
    md: {
      button: mdButtonStyle.button,
      listbox: mdListBoxStyle,
      icon: mdButtonStyle.icon,
      label: {
        fontSize: "1rem",
        marginBottom: "0.5rem"
      }
    },
    lg: {
      button: lgButtonStyle.button,
      listbox: lgListBoxStyle,
      icon: lgButtonStyle.icon,
      label: {
        fontSize: "1.125rem",
        marginBottom: "0.5rem"
      }
    }
  },
  variants: {
    outlined: (props) => ({
      button: mode(outlinedVariantStyle.light, outlinedVariantStyle.dark)(props),
      listbox: mode(listBoxStyle.light, listBoxStyle.dark)(props),
      label: mode(labelStyle.light, labelStyle.dark)(props),
    }),
    filled: (props) => ({
      button: mode(filledVariantStyle.light, filledVariantStyle.dark)(props),
      listbox: mode(listBoxStyle.light, listBoxStyle.dark)(props),
      label: mode(labelStyle.light, labelStyle.dark)(props),
    }),
    flushed: (props) => ({
      button: mode(flushedVariantStyle.light, flushedVariantStyle.dark)(props),
      listbox: mode(listBoxStyle.light, listBoxStyle.dark)(props),
      label: mode(labelStyle.light, labelStyle.dark)(props),
    }),
    unstyled: (props) => ({
      button: mode(unstyledVariantStyle.light, unstyledVariantStyle.dark)(props),
      listbox: mode(listBoxStyle.light, listBoxStyle.dark)(props),
      label: mode(labelStyle.light, labelStyle.dark)(props),
    })
  },
  defaultProps: {
    size: "md",
    variant: "outlined"
  }
}

const theme = extendTheme({
  components: {
    CustomSelect,
  },
});

export default theme;
