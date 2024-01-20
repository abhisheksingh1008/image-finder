"use client";

import { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";
import ImageItem from "./ImageItem";
import classes from "@/styles/ImagesGrid.module.css";

const SearchResults = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    setError("");
    setLoading(true);

    await axios
      .get(`/api/search?q=${query}`)
      .then(({ data }) => {
        console.log(data);
        setImages(data.imagesData.hits);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <Box
      p={{ base: 2, md: 5, lg: 7 }}
      className={loading ? classes.loading : classes.grid}
    >
      {loading ? (
        <Spinner size="lg" />
      ) : error ? (
        <div>Something went wrong. {error}</div>
      ) : (
        images.map((image) => (
          <ImageItem
            key={image.id}
            id={image.id}
            tags={image.tags}
            imageUrl={image.webformatURL}
          />
        ))
      )}
    </Box>
  );
};

export default SearchResults;
