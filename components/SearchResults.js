"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import axios from "axios";
import ImageItem from "./ImageItem";
import classes from "@/styles/ImagesGrid.module.css";

const SearchResults = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  const lastImageRef = useRef(null);

  const fetchImages = async () => {
    setError("");
    setLoading(true);

    await axios
      .get(`/api/search?q=${query}&page=${page + 1}&per_page=50`)
      .then(({ data }) => {
        // console.log(data);
        setPage((page) => page + 1);
        setHasNextPage(page < Math.ceil(data.imagesData.totalHits / 50));
        setImages((images) => [...images, ...data.imagesData.hits]);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });

    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchImages();
        }
      },
      { root: document, rootMargin: "200px" }
    );

    observer.observe(lastImageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [images]);

  useEffect(() => {
    setImages([]);
    setLoading(false);
    setError("");
    setPage(0);
    setHasNextPage(true);
  }, [query]);

  return (
    <Box
      p={{ base: 2, md: 5, lg: 7 }}
      className={loading ? classes.loading : classes.grid}
    >
      {images.map((image, i, images) => (
        <ImageItem
          key={image.id}
          id={image.id}
          tags={image.tags}
          imageUrl={image.webformatURL}
          ref={images.length - 1 === i ? lastImageRef : null}
        />
      ))}
      {hasNextPage && <div ref={lastImageRef}></div>}
      {loading && (
        <Box textAlign={"center"}>
          <Spinner size="lg" />
        </Box>
      )}
      {error && <div>Something went wrong. {error}</div>}
    </Box>
  );
};

export default SearchResults;
