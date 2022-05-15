import { Heading } from "@chakra-ui/react";
import Select, { Option } from "./Select";

function App() {
  return (
    <div className="App">
      <Heading>Custom Select Component</Heading>
      <Select variant="filled" size="md" placeholder="yippee">
        <Option value="1">option one</Option>
        <Option value="2">option two</Option>
        <Option value="3">option three</Option>
      </Select>
    </div>
  );
}

export default App;
