import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "Main"`,
        lg: `"nav nav" "aside Main"`,
      }}
    >
      <GridItem bg="pink.300" area={"nav"}>
        Nav
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
