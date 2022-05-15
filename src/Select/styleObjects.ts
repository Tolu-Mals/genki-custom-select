

const outlinedVariantStyle = {
    light: {
      border: "1px solid #E2E8F0",
      borderRadius: "6px",
      color: "#565661",
    },
    dark: {
        border: "1px solid #596375",
        borderRadius: "6px",
        color: "#C7C7C7",
    }
  };

  const filledVariantStyle = {
    light: {
      backgroundColor: "#E2E8F0",
      borderRadius: "6px",
      color: "#565661",
    },
    dark: {
        backgroundColor: "#7A889F",
        borderRadius: "6px",
        color: "#151A23",
    }
  };

  const flushedVariantStyle = {
    light: {
      color: "#565661",
      borderBottom: "1px solid #E2E8F0",
      paddingLeft: 0,
      paddingRight: 0,
    },
    dark: {
        color: "#C7C7C7",
        borderBottom: "1px solid #666674",
        paddingLeft: 0,
        paddingRight: 0,
      },
  };

  const unstyledVariantStyle = {
    light: {
        color: "#565661",
    },
    dark: {
        color: "#C7C7C7",
    }
  };

  const smStyle = {
    button: {
      padding: "0.25rem 0.5rem 0.25rem 0.75rem",
      fontSize: "14px",
      lineHeight: "14px",
    },
    icon: {
      width: 6,
      height: 6,
    },
  };

  const mdStyle = {
    button: {
      padding: "0.25rem 0.5rem 0.25rem 0.75rem",
      fontSize: "16px",
      lineHeight: "16px",
    },
    icon: {
      width: 8,
      height: 8,
    },
  };

  const lgStyle = {
    button: {
        padding: "0.5rem 0.5rem 0.5rem 0.75rem",
        fontSize: "18px",
        lineHeight: "18px",
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
    },
    dark: {
        border: "1px solid #596375",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.29)",
        borderRadius: 6,
    }
}
  
  const styleObjects = {
      filledVariantStyle,
      outlinedVariantStyle,
      flushedVariantStyle,
      unstyledVariantStyle,
      smStyle,
      mdStyle,
      lgStyle,
      listBoxStyle
  }

  export default styleObjects