"use client";

import { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import classes from "@/styles/SearchInput.module.css";

const SearchInput = () => {
  const router = useRouter();
  const [enteredText, setEnteredText] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${enteredText}`);
  };

  return (
    <Box
      p={3}
      color={"white"}
      border={"2px"}
      fontWeight={"bold"}
      fontSize={{ base: "1rem", md: "2rem", lg: "2rem" }}
      borderRadius={"8px"}
      backdropFilter={"blur(8px)"}
      bg={"rgba(255, 255, 255, 0.3)"}
      borderColor={"rgba(255, 255, 255, 0.5)"}
    >
      <form onSubmit={onSearch}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <FiSearch />
          <Input
            ml={{ base: 2, md: 4 }}
            size="lg"
            type="text"
            border={"none"}
            variant="unstyled"
            placeholder="Search"
            className={classes.input}
            value={enteredText}
            onChange={(e) => setEnteredText(e.target.value)}
          />
          <Button type="submit" colorScheme="teal">
            Go
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SearchInput;
