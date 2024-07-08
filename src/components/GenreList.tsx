import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize={"40px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontFamily="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
