import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformsList from "../Components/PlatformsList";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "210px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformsList />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
