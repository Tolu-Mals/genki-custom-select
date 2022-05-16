import { Heading, Container, Button, useColorMode } from "@chakra-ui/react";
import Select, { Option } from "./Select";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Container>
        <Heading mb={4}>Custom Select Component</Heading>
        <Button onClick={toggleColorMode} mb={4}>Toggle dark</Button>
        <Select variant="outlined" size="md" placeholder="yippee">
          <Option value="1">option one</Option>
          <Option value="2">option two</Option>
          <Option value="3">option three</Option>
        </Select>
      </Container>
    </div>
  );
}

export default App;
