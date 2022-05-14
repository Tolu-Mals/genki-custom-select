const { Flex, Text, useColorMode } = require("@chakra-ui/react");

const { ChevronDownIcon } = require("@chakra-ui/icons");

const styled = require("@emotion/styled").default;

const SelectButton = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const OutlinedVariantStyle = {
    light: {
      border: "1px solid #E2E8F0",
      borderRadius: "6px",
      color: "#565661",
    },
    dark: {
        border: "1px solid #666674",
        borderRadius: "6px",
        color: "#C7C7C7",
    }
  };

  const FilledVariantStyle = {
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

  const FlushedVariantStyle = {
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

  const UnstyledVariantStyle = {
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


  const buttonStyle = Object.assign({}, lgStyle.button, OutlinedVariantStyle.dark);

  return (
    <Flex sx={buttonStyle} justify="space-between" align="center">
      <Text>Select Something</Text>
      <ChevronDownIcon
        w={mdStyle.icon.width}
        h={mdStyle.icon.height}
        colors={buttonStyle.color}
      />
    </Flex>
  );
};

export default SelectButton;
