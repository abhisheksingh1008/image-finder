import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      p={3}
      w="100%"
      h="fit-content"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      border={"2px"}
      borderColor={"white"}
      borderRadius={"8px"}
    >
      <Box
        color={"white"}
        fontWeight={"bold"}
        fontSize={{ base: "1rem", md: "2rem", lg: "2rem" }}
      >
        <Link href="/">Image finder</Link>
      </Box>
      <Box>
        <Button>Login</Button>
        <Button ml={{ base: 1, md: 3, lg: 4 }}>Signup</Button>
      </Box>
    </Box>
  );
};

export default Header;
