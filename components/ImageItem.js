import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import ImageTagItem from "./ImageTagItem";

const ImageItem = ({ id, imageUrl, tags }) => {
  const allTags = tags.split(",");

  return (
    <Box
      mb={3}
      borderRadius={"sm"}
      overflow={"hidden"}
      style={{ breakInside: "avoid" }}
    >
      <Link href={`/image/${id}`}>
        <Image borderRadius="md" src={imageUrl} alt={`image-${id}`} />
      </Link>
      <Box
        mt={2.5}
        display={"flex"}
        alignItems={"center"}
        overflowX={"hidden"}
        gap={2}
      >
        {allTags.map((tag, i) => (
          <ImageTagItem key={`${tag}-${i}`} tag={tag.trim()} />
        ))}
      </Box>
    </Box>
  );
};

export default ImageItem;
