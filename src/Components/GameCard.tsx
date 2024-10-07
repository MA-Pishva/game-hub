import {
  Card,
  CardBody,
  Image,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Link to={`games/${game.slug}`}>
      <Card height="100%" display="flex" flexDirection="column">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody flex={10}>
          <HStack justifyContent="space-between" marginY={2}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic ? game.metacritic : null} />
          </HStack>
          <VStack justifyContent="space-between" alignItems="flex-start">
            <Heading fontSize="2xl">{game.name}</Heading>
            <Emoji rating={game.rating_top} />
          </VStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
