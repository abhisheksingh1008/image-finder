"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "@/store/authContext";

const initialFromState = {
  email: "",
  password: "",
  isSubmitting: false,
};

const page = () => {
  const router = useRouter();
  const { signIn, signUp, user } = useAuth();

  //   if (user) {
  //     router.back();
  //     return;
  //   }

  const [formData, setFormData] = useState(initialFromState);
  const [showPassword, setShowPassword] = useState(false);

  const inputChangeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      isSubmitting: true,
    }));
    await signIn(formData.email, formData.password);
    setFormData((prev) => ({
      ...prev,
      isSubmitting: false,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      isSubmitting: true,
    }));
    await signUp(formData.email, formData.password);
    setFormData((prev) => ({
      ...prev,
      isSubmitting: false,
    }));
  };

  return (
    <Box
      w={"100dvw"}
      h={"100dvh"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgImage={`url("https://source.unsplash.com/user/erondu/1600x900")`}
    >
      <Container maxW="xl" centerContent verticalAlign={"middle"}>
        <Box
          p={8}
          w="100%"
          bg="white"
          m="25px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          textAlign="center"
        >
          <Text fontSize="4xl" fontFamily="Work sans" fontWeight="semibold">
            Image Finder
          </Text>
          <form>
            <VStack spacing={"6px"}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={formData.email}
                  placeholder="Enter your Email"
                  onChange={inputChangeHandler}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    onChange={inputChangeHandler}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      size="sm"
                      h="1.75rem"
                      onClick={() => {
                        setShowPassword((showPassword) => !showPassword);
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                width="100%"
                color={"white"}
                colorScheme={"blue"}
                style={{ marginTop: "10px" }}
                isLoading={formData.isSubmitting}
                loadingText="Submitting"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                type="submit"
                width="100%"
                color={"white"}
                colorScheme={"blue"}
                style={{ marginTop: "10px" }}
                isLoading={formData.isSubmitting}
                loadingText="Submitting"
                onClick={handleSignup}
              >
                Sign up
              </Button>
              <Button
                width="100%"
                color={"white"}
                colorScheme={"teal"}
                style={{ marginTop: "10px" }}
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    email: "infiniteview000@gmail.com",
                    password: "87654321",
                  }));
                }}
                isLoading={formData.isSubmitting}
              >
                Get Guest user credentials
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
