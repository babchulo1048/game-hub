import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

//
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                boxSize={"40px"}
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontFamily="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
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
