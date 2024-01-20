import { Box } from "@chakra-ui/react";
import classes from "./page.module.css";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main>
      <Box
        p={{ base: 2, md: 9, lg: 12 }}
        w={"100dvw"}
        h={"100dvh"}
        className={classes.container}
      >
        <Header />
        <Box
          p={{ base: 5, md: 8, lg: 9 }}
          color={"white"}
          fontSize={{ base: "3rem", md: "4rem", lg: "4.5rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Box>Discover over 2,000,000 free Stock Images</Box>
        </Box>
        <Box px={{ base: 5, md: 12, lg: 20 }}>
          <SearchInput />
        </Box>
      </Box>
    </main>
  );
}
