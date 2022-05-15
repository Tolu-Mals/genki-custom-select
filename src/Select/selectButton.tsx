const { Flex, Text, useColorMode } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const SelectButton = () => {

  const OutlinedVariantStyle = {
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

  const FilledVariantStyle = {
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

  const FlushedVariantStyle = {
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
      paddingLeft: 0,
      paddingRight: 0,
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
        paddingLeft: 0,
        paddingRight: 0,
        outline: "none"
      },
  };

  const UnstyledVariantStyle = {
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


  const buttonStyle = Object.assign({}, smStyle.button, UnstyledVariantStyle.light);

  return (
    <Flex sx={buttonStyle} justify="space-between" align="center" mb={2} tabIndex="0">
      <Text>Select Something</Text>
      <ChevronDownIcon
        w={smStyle.icon.width}
        h={smStyle.icon.height}
        colors={buttonStyle.color}
      />
    </Flex>
  );
};

export default SelectButton;
