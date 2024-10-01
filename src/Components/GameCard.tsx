import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "./../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" marginY={2}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconsList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
