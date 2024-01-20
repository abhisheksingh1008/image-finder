"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Image, Spinner } from "@chakra-ui/react";
import ImageTagItem from "@/components/ImageTagItem";
import DownloadImage from "@/components/DownloadImage";
import AboutImage from "@/components/AboutImage";
import ShareImage from "@/components/ShareImage";
import SearchInput from "@/components/SearchInput";

const page = ({ params }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImageInfo = async () => {
      setError("");
      setLoading(true);

      await axios
        .get(`/api/image/${params.imageId}`)
        .then(({ data }) => {
          // console.log(data);
          setImage(data.imageInfo.hits[0]);
          setAllTags(data.imageInfo.hits[0].tags.split(","));
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });

      setLoading(false);
    };

    fetchImageInfo();
  }, [params.imageId]);

  return (
    <Box>
      <Box
        px={{ base: 2, md: 8, lg: 12 }}
        py={6}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgImage={`url("https://source.unsplash.com/user/erondu/1600x900")`}
        display={"flex"}
        flexDir={"column"}
        gap={10}
      >
        <Box px={{ base: 3, md: 12, lg: 20 }}>
          <SearchInput />
        </Box>
      </Box>
      {loading ? (
        <Box m={2} textAlign={"center"}>
          <Spinner size="lg" />
        </Box>
      ) : error ? (
        <div>Something went wrong. {error}</div>
      ) : (
        image && (
          <Box>
            <Box
              px={{ base: 2, md: 5 }}
              py={{ base: 2, md: 4 }}
              bgColor={"gray.200"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>Image id : {image.id}</Box>
              <ShareImage />
            </Box>
            <Box p={{ base: 2, md: 5 }}>
              <Box
                display={"flex"}
                flexDir={{ base: "column", md: "row" }}
                alignItems={{ base: "center", md: "flex-start" }}
                justifyContent={"center"}
                gap={{ base: 0, md: 2, lg: 6 }}
              >
                <Box>
                  <Image
                    borderRadius="md"
                    src={image.webformatURL}
                    alt={`image-${image.id}`}
                  />
                  <Box
                    mt={3}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={3}
                  >
                    Tags:{" "}
                    {allTags.map((tag, i) => (
                      <ImageTagItem key={`${tag}-${i}`} tag={tag.trim()} />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Box mb={5} mt={{ base: 5, md: 0 }}>
                    <DownloadImage image={image} />
                  </Box>
                  <AboutImage
                    userId={image.user_id}
                    userName={image.user}
                    views={image.views}
                    likes={image.likes}
                    imageType={image.type}
                    downloads={image.downloads}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

export default page;
