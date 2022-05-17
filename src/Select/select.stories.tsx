import { Container, Button } from "@chakra-ui/react";
import { Select, Option } from "./index";

export default {
  title: "Genki",
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" mt="40px">
        {story()}
      </Container>
    ),
  ],
}

 export const basic = () => {
     <Button>Test div</Button>
//   <Select placeholder="Choose Option">
//     <Option value="1">one</Option>
//     <Option value="2">two</Option>
//     <Option value="6">six</Option>
//     <Option value="8">eight</Option>
//     <Option value="9">elephant</Option>
//     <Option value="5">five</Option>
//   </Select>;
};

 export const BasicD = () => {
  <Select placeholder="Choose Option">
    <Option value="1">one</Option>
    <Option value="2">two</Option>
    <Option value="6">six</Option>
    <Option value="8">eight</Option>
    <Option value="9">elephant</Option>
    <Option value="5">five</Option>
  </Select>;
};
