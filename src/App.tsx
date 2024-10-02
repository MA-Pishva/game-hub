import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformsList from "./Components/PlatformsList";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "210px 1fr",
      }}
    >
      <GridItem area="nav" marginY={3}>
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformsList
            selectedPlatform={gameQuery.platform}
            onSelected={(platform) => setGameQuery({ ...gameQuery, platform })}
          ></PlatformsList>
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelected={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
