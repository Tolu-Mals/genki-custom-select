import { Heading, Container, Button, useColorMode } from "@chakra-ui/react";
import { Select, Option } from "./Select";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="App">
      <Container>
        <Heading my={6}>Custom Select Component</Heading>
        <Button onClick={toggleColorMode} mb={4}>Dark Mode</Button>

        <form method="POST" action="https://formsubmit.co/{email}">
          <Select size="lg" placeholder="Eg. one" label="Choose Option" name="numberOption" >
            <Option value="1">one</Option>
            <Option value="2">two</Option>
            <Option value="6">six</Option>
            <Option value="8">eight</Option>
            <Option value="9">elephant</Option>
            <Option value="5">five</Option>
          </Select>
          <Button type="submit">Submit</Button>
        </form>

      </Container>
    </div>
  );
}

export default App;
