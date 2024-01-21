"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";

const ShareImage = () => {
  const toast = useToast();

  return (
    <Menu>
      <MenuButton
        p={1}
        as={Button}
        variant={"outline"}
        colorScheme="transparent"
        rightIcon={<HiChevronDown />}
      >
        Share
      </MenuButton>
      <MenuList>
        <MenuItem
          p={{ base: 1.25, md: 2.5, lg: 2.5 }}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({
              title: "URL copied to clipboard",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          <MdContentCopy size={"1.1rem"} />
          <Text ml={1}>Copy link</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ShareImage;
