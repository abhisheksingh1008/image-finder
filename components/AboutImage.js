import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const AboutImage = ({
  userId,
  userName,
  imageType,
  views,
  likes,
  downloads,
}) => {
  return (
    <Box mt={3}>
      <Text fontSize={"1.35rem"} fontWeight={"bold"}>
        Information
      </Text>
      <Grid mt={1} templateColumns={"repeat(3, 1fr)"} columnGap={9} rowGap={3}>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            User
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {userName}
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            User id
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {userId}
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            Type
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {imageType}
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            Views
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {views}
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            Downloads
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {downloads}
          </Text>
        </GridItem>
        <GridItem>
          <Text color={"gray.600"} fontWeight={"bold"}>
            Likes
          </Text>
          <Text fontSize={"1.25rem"} fontWeight={"bold"}>
            {likes}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutImage;
