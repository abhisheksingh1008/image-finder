"use client";

import { useAuth } from "@/store/authContext";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  const { user, signOut } = useAuth();

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
      backdropFilter={"blur(8px)"}
      bg={"rgba(255, 255, 255, 0.3)"}
      borderColor={"rgba(255, 255, 255, 0.5)"}
    >
      <Box
        color={"white"}
        fontWeight={"bold"}
        fontSize={{ base: "1rem", md: "2rem", lg: "2rem" }}
        // background={
        //   "-webkit-linear-gradient(135deg, rgb(188, 12, 241), rgb(212, 4, 4))"
        // }
        // backgroundClip={"text"}
      >
        <Link href="/">Image finder</Link>
      </Box>
      <Box>
        {user ? (
          <Button colorScheme="teal" onClick={signOut}>
            Logout
          </Button>
        ) : (
          <>
            <Link href={"/login"}>
              <Button colorScheme="teal">Login</Button>
            </Link>
            <Link href={"/login"}>
              <Button ml={{ base: 1, md: 3, lg: 4 }} colorScheme="teal">
                Signup
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
