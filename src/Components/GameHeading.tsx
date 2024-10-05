import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const genre =
    genres?.results.find((genre) => genre.id === gameQuery.genreId)?.name || "";
  const platform =
    platforms?.results.find((platform) => platform.id === gameQuery.platformId)
      ?.name || "";
  const heading = `${genre} ${platform} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
