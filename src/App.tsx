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
          <Option value="1">one</Option>
          <Option value="2">two</Option>
          <Option value="6">six</Option>
          <Option value="8">eight</Option>
          <Option value="5">five</Option>
        </Select>
      </Container>
    </div>
  );
}

export default App;
