import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "./../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginY={2}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconsList>
          <CriticScore
            score={game.metacritic ? game.metacritic : null}
          ></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
