import { Box } from "@chakra-ui/react";
import Link from "next/link";

const CategoryItem = ({ name }) => {
  return (
    <Box borderRadius={"4px"} border={"1px"} bgColor={"white"}>
      <Link href={`/search?q=${name}`}>
        <Box p={2.5} px={6}>
          {name}
        </Box>
      </Link>
    </Box>
  );
};

export default CategoryItem;
