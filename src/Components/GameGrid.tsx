import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={3} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
