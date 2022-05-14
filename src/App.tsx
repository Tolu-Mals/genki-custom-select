import Select from "./Select";
const { Heading, Container, useColorMode, Switch, Button  } = require("@chakra-ui/react");


function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <Container bg={ (colorMode === 'light') ? "#fff":"#2D3748"} p={4}>
        <Heading mb={8}>Custom Select</Heading>
        <Button onClick={toggleColorMode} mb={8}>Toggle Color Mode</Button>
        <Select />
      </Container>
    </div>
  );
}

export default App;
