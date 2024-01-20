import Link from "next/link";
import { Box } from "@chakra-ui/react";

const ImageTagItem = ({ tag }) => {
  return (
    <Link href={`/search?q=${tag}`}>
      <Box p={1.5} px={3} bgColor={"gray.200"} borderRadius={"md"}>
        {tag}
      </Box>
    </Link>
  );
};

export default ImageTagItem;
