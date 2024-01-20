import { Box, Center } from "@chakra-ui/react";
import { categories } from "@/utils/constants";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Box
      py={3}
      px={{ base: 2, md: 5, lg: 7 }}
      w={"100%"}
      display={"flex"}
      alignItems={"center"}
      overflowX={"scroll"}
      bgColor={"gray.100"}
      gap={{ base: 1, md: 2 }}
    >
      {categories.map((c, i) => (
        <CategoryItem key={`${c}-${i}`} name={c} />
      ))}
    </Box>
  );
};

export default Categories;
