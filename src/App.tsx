import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "aside Main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="green.600" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="blue.700" area={"Main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
