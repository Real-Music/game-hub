import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const templateAreas = { base: `"nav" "main"`, lg: `"nav nav" "aside main"` };
const templateColumns = { base: "1fr", lg: "200px 1fr" };

function App() {
  return (
    <Grid templateAreas={templateAreas} templateColumns={templateColumns}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
