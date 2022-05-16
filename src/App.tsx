import { Heading, Container, Button, useColorMode } from "@chakra-ui/react";
import Select, { Option } from "./Select";
import { PhoneIcon } from '@chakra-ui/icons'

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Container>
        <Heading mb={4}>Custom Select Component</Heading>
        <Button onClick={toggleColorMode} mb={4}>Toggle dark</Button>
        <Select variant="outlined" size="lg" placeholder="Choose Option">
          <Option value="1">Option one</Option>
          <Option value="2">Option two</Option>
          <Option value="3">Option three</Option>
          <Option value="4">Option four</Option>
          <Option value="5">Option five</Option>
          <Option value="6">Option six</Option>
        </Select>
      </Container>
    </div>
  );
}

export default App;
