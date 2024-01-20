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
      borderRadius={"8px"}
      backdropBlur={"10px"}
      bg={"rgba(255, 255, 255, 0.3)"}
      borderColor={"rgba(255, 255, 255, 0.5)"}
    >
      <Box
        fontWeight={"bold"}
        fontSize={{ base: "1rem", md: "2rem", lg: "2rem" }}
        background={
          "-webkit-linear-gradient(135deg, rgb(188, 12, 241), rgb(212, 4, 4))"
        }
        backgroundClip={"text"}
      >
        <Link href="/">Image finder</Link>
      </Box>
      <Box>
        <Button colorScheme="teal">Login</Button>
        <Button ml={{ base: 1, md: 3, lg: 4 }} colorScheme="teal">
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
