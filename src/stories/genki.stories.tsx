import * as React from "react";
import { Container, Stack } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Select, Option } from "../Select";
import theme from "../theme";

export default {
  title: "Components / Genki / Select",
  decorators: [
    (story: Function) => (
      <ChakraProvider theme={theme}>
        <Container maxWidth="400px" mt="40px">
          {story()}
        </Container>
      </ChakraProvider>
    ),
  ],
};

export const Plain = () => (
  <Select placeholder="Select option">
    <Option value="Option 1">Option 1</Option>
    <Option value="Option 2">Option 2</Option>
    <Option value="Option 3">Option 3</Option>
  </Select>
);

export const Sizes = () => (
  <Stack spacing={4}>
    <Select placeholder={`lg size`} size={"lg"} />
    <Select placeholder={`md size`} size={"md"} />
    <Select placeholder={`sm size`} size={"sm"} />
  </Stack>
);

export const Variants = () => (
  <Stack>
    <Select placeholder="Outlined" variant="outlined">
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>

    <Select placeholder="Filled" variant="filled">
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>

    <Select placeholder="Flushed" variant="flushed">
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>

    <Select placeholder="Unstyled" variant="unstyled">
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>
  </Stack>
);

export const States = () => (
  <Stack>
    <Select placeholder="Invalid" isInvalid>
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>

    <Select placeholder="Disabled" isDisabled>
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>

    <Select placeholder="Read Only" readOnly>
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>
  </Stack>
);

export const Controlled = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (option: any) => {
    setValue(option);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      placeholder="Controlled select"
      defaultValue="option 5"
    >
      <Option value="Option 1">Option 1</Option>
      <Option value="Option 2">Option 2</Option>
      <Option value="Option 3">Option 3</Option>
    </Select>
  );
};


export const Custom = () => (
  <Select 
  size="lg" 
  label="Choose Option" 
  buttonStyle={{
    backgroundColor: "orange"
  }}
  listBoxStyle={{
    borderColor: "red"
  }}
  labelStyle={{
    color: "red"
  }}
>
  <Option value="1">one</Option>
  <Option value="2">two</Option>
  <Option value="6">six</Option>
  <Option value="8">eight</Option>
  <Option value="9">elephant</Option>
  <Option value="5">five</Option>
</Select>
);


