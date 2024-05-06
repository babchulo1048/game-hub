import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

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
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"Main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
