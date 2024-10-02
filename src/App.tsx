import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformsList from "./Components/PlatformsList";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelected={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformsList
          selectedPlatform={selectedPlatform}
          onSelected={(platform) => setSelectedPlatform(platform)}
        ></PlatformsList>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
