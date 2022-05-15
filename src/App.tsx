import { Heading, Container } from "@chakra-ui/react";
import Select, { Option } from "./Select";

function App() {
  return (
    <div className="App">
      <Container>
        <Heading>Custom Select Component</Heading>
        <Select variant="outlined" size="md" placeholder="yippee" isDisabled>
          <Option value="1">option one</Option>
          <Option value="2">option two</Option>
          <Option value="3">option three</Option>
        </Select>
      </Container>
    </div>
  );
}

export default App;
