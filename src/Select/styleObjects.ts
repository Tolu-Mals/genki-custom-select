  
  const outlinedVariantStyle = {
    light: {
      '&:hover': {
        borderColor: "#C5C6C8",
      },
      "&:focus":{
        border: "1px solid #2F80ED",
        boxShadow: "rgb(49 130 206) 0px 0px 0px 1px",
      },
      border: "1px solid #E2E8F0",
      borderRadius: "6px",
      color: "#565661",
      transition: "all 0.3s",
      outline: "none"
  },
    dark: {
        '&:hover': {
          borderColor: "#ABABAB",
        },
        "&:focus":{
          border: "1px solid #2F80ED",
          boxShadow: "rgb(49 130 206) 0px 0px 0px 1px",
        },
        border: "1px solid #596375",
        borderRadius: "6px",
        color: "#C7C7C7",
        transition: "all 0.3s",
        outline: "none"
    }
  };

  const filledVariantStyle = {
    light: {
      "&:hover": {
        backgroundColor: "#e2ebf7"
      },
      "&:focus":{
        border: "1px solid #2F80ED",
        boxShadow: "rgb(49 130 206) 0px 0px 0px 1px",
      },
      backgroundColor: "#F0F5FC",
      border: "1px solid #F0F5FC",
      borderRadius: "6px",
      color: "#565661",
      transition: "all 0.3s",
      outline: "none"

    },
    dark: {
        '&:hover': {
          backgroundColor: "#8FA0BD"
        },
        "&:focus":{
          border: "1px solid #2F80ED",
          boxShadow: "rgb(49 130 206) 0px 0px 0px 1px",
        },
        backgroundColor: "#7A889F",
        border: "1px solid #7A889F",
        borderRadius: "6px",
        color: "#151A23",
        transition: "all 0.3s",
        outline: "none",
    }
  };

  const flushedVariantStyle = {
    light: {
      '&:hover': {
        borderColor: "#C5C6C8"
      },
      '&:focus': {
        borderColor: "#2F80ED",
        boxShadow: "rgb(49 130 206) 0px 0.5px",
      },
      transition: "all 0.3s",
      color: "#565661",
      borderBottom: "1px solid #E2E8F0",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      outline: "none"
    },
    dark: {
        "&:hover": {
          borderColor: "#ABABAB"
        },
        "&:focus": {
          borderColor: "#2F80ED",
          boxShadow: "rgb(49 130 206) 0px 0.5px",
        },
        transition: "border 0.3s",
        color: "#C7C7C7",
        borderBottom: "1px solid #596375",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        outline: "none"
      },
  };

  const unstyledVariantStyle =  {
    light: {
        "&:focus": {
          border: "1px solid #2F80ED",
          boxShadow: "rgb(49 130 206) 0px 0.5px",
        },
        color: "#565661",
        outline: "none"
    },
    dark: {
        "&:focus": {
          borderColor: "#2F80ED",
          boxShadow: "rgb(49 130 206) 0px 0.5px",
        },
        color: "#C7C7C7",
        outline: "none"
    }
  };


  const outlinedVariantDisabledStyle = {
    light: {
      color: "#747486",
      backgroundColor: "#F8F8F8",
      outline: "none",
      border: "1px solid #DDDDDD",
      "&:hover": {},
      "&:focus": {}
    },
    dark: {
      color: "#E0E0E0",
      backgroundColor: "#5C6271",
      outline: "none",
      border: "1px solid #8991A4",
      "&:hover": {},
      "&:focus": {}
    }
  }

  const flushedVariantDisabledStyle = {
    light: {
      outline: "none",
      backgroundColor: "#F8F8F8",
      borderColor: "#E2E8F0",
      "&:hover": {},
      "&:focus": {}
    },
    dark: {
      outline: "none",
      backgroundColor: "#5C6271",
      borderColor: "#8991A4",
      "&:hover": {},
      "&:focus": {}
    }
  }

  const outlinedVariantReadOnlyStyle = {
    light: {
      color: "#747486",
      backgroundColor: "transparent",
      outline: "none",
      border: "1px solid #E2E8F0",
      "&:hover": {}
    },
    dark: {
      color: "#E0E0E0",
      backgroundColor: "#5C6271",
      outline: "none",
      border: "1px solid #8991A4",
      "&:hover": {}
    }
  }

  const flushedVariantReadOnlyStyle = {
    light: {
      outline: "none",
      bacgkroundColor: "#F8F8F8",
      "&:hover": {}
    },
    dark: {
      outline: "none",
      bacgkroundColor: "#5C6271",
      "&:hover": {}
    }
  }

  const outlinedVariantInvalidStyle = {
    light: {
      outline: "none",
      border: "1px solid #EB5757",
      boxShadow: "rgb(235 87 87) 0px 0px 0px 1px",
      "&:hover": {},
      "&:focus": {},
    },
    dark: {
      outline: "none",
      border: "1px solid #EB5757",
      boxShadow: "rgb(235 87 87) 0px 0px 0px 1px",
      "&:hover": {},
      "&:focus": {},
    }
  }

  const flushedVariantInvalidStyle = {
    light: {
      outline: "none",
      borderColor: "#EB5757",
      boxShadow: "rgb(235 87 87) 0px 0.5px",
      "&:hover": {},
      "&:focus": {},
    },
    dark: {
      outline: "none",
      borderColor: "#EB5757",
      boxShadow: "rgb(235 87 87) 0px 0.5px",
      "&:hover": {},
      "&:focus": {},
    }
  }

  const smButtonStyle = {
    button: {
      padding: "0.25rem 0.5rem 0.25rem 0.75rem",
      fontSize: "0.875rem",
      lineHeight: "1rem",
      height: "34px"
    },
    icon: {
      width: 6,
      height: 6,
    },
  };

  const mdButtonStyle = {
    button: {
      padding: "0.25rem 0.5rem 0.25rem 0.75rem",
      fontSize: "1rem",
      lineHeight: "1rem",
      height: "42px",
    },
    icon: {
      width: 8,
      height: 8,
    },
  };

  const lgButtonStyle = {
    button: {
        padding: "0.25rem 0.5rem 0.25rem 0.75rem",
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        height: "50px",
      },
    icon: {
        width: 10,
        height: 10,
    },
  }

  const listBoxStyle = {
    light: {
        border: "1px solid #E2E8F0",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        borderRadius: 6,
        "li:hover": {
          backgroundColor: "#F6F6F6"
        },
        "li.active": {
          backgroundColor: "#F6F6F6"
        }
    },
    dark: {
        border: "1px solid #596375",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.29)",
        borderRadius: 6,
        "li:hover": {
          backgroundColor: "#7A889F"
        },
        "li.active": {
          backgroundColor: "#7A889F"
        }
    }
  }

  const smListBoxStyle = {
    "li": {
      padding: "8px 12px",
    },
    "li:first-of-type": {
      paddingTop: "12px"
    },
    "li:last-of-type": {
      paddingBottom: "12px"
    },
    fontSize: "0.875rem"
  }

  const mdListBoxStyle = {
    "li": {
      padding: "12px 12px",
    },
    "li:first-of-type": {
      paddingTop: "14px"
    },
    "li:last-of-type": {
      paddingBottom: "14px"
    },
    fontSize: "1rem"
  }

  const lgListBoxStyle = {
    "li": {
      padding: "14px 14px",
    },
    "li:first-of-type": {
      paddingTop: "16px"
    },
    "li:last-of-type": {
      paddingBottom: "16px"
    },
    fontSize: "1.125rem"
  }

  const labelStyle = {
    light: {
      color: "#333333",
    },
    dark: {
      color: "#F9F9F9"
    }
  }

  const labelSizes = {
    sm: {
      fontSize: "0.875rem",
      fontWeight: "500",
      display: "inline-block",
      marginBottom: "0.25rem"
    },
    md: {
      fontSize: "1rem",
      fontWeight: "500",
      display: "inline-block",
      marginBottom: "0.5rem"
    },
    lg: {
      fontSize: "1.125rem",
      fontWeight: "500",
      display: "inline-block",
      marginBottom: "0.5rem"
    }
  }

  const styleObjects = {
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
      outlinedVariantDisabledStyle,
      flushedVariantDisabledStyle,
      outlinedVariantInvalidStyle,
      flushedVariantInvalidStyle,
      outlinedVariantReadOnlyStyle,
      flushedVariantReadOnlyStyle,
      labelSizes,
      labelStyle
  }

  export default styleObjects;

