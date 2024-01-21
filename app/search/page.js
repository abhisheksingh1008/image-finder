import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Categories from "@/components/Categories";
import SearchResults from "@/components/SearchResults";

const page = ({ searchParams }) => {
  const { q: query } = searchParams;

  return (
    <Box>
      <Box
        px={{ base: 2, md: 8, lg: 12 }}
        py={12}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgImage={`url("https://source.unsplash.com/user/erondu/1600x900")`}
        display={"flex"}
        flexDir={"column"}
        gap={10}
      >
        <Header />
        <Box px={{ base: 5, md: 12, lg: 20 }}>
          <SearchInput />
        </Box>
      </Box>
      <Categories />
      <SearchResults query={query} />
    </Box>
  );
};

export default page;
