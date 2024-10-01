import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Game } from "./../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
