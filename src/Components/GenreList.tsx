import {
  Image,
  HStack,
  List,
  ListItem,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelected, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <Spinner></Spinner>}
      {error && <p>{error.message}</p>}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                boxSize="50px"
                objectFit="cover"
                borderRadius={12}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelected(genre)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
