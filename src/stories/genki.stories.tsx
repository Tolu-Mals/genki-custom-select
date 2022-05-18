import * as React from "react";
import { Container, Stack } from "@chakra-ui/layout";
import { Select, Option } from "../Select";

export default {
  title: "Components / Forms / Select",
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" mt="40px">
        {story()}
      </Container>
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

export const Sizes = () => (
  <Stack spacing={4}>
      <Select placeholder={`lg size`} size={"lg"} />
      <Select placeholder={`md size`} size={"md"} />
      <Select placeholder={`sm size`} size={"sm"} />
  </Stack>
)

export const Controlled = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (option: any) => {
    setValue(option)
  }

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
  )
}
