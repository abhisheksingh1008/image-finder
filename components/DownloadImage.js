"use client";

import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const DownloadImage = ({ image }) => {
  const [width, setWidth] = useState(180);
  const [imageBlob, setImageBlob] = useState(null);
  const [downloadURL, setDownloadURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [largeImageSelected, setLargeImageSelected] = useState(false);

  let imageUrl = image.webformatURL.split("_")[0];

  useEffect(() => {
    const generateDownloadURL = async () => {
      const url = largeImageSelected
        ? image.largeImageURL
        : `${imageUrl}_${width}.jpg`;

      // console.log(largeImageSelected, width, url);

      setLoading(true);
      await fetch(url)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          setImageBlob(new Blob([buffer], { type: "image/jpeg" }));
        });
      setLoading(false);
    };

    generateDownloadURL();
  }, [width]);

  useEffect(() => {
    if (imageBlob) {
      setDownloadURL(URL.createObjectURL(imageBlob));
    }
  }, [imageBlob]);

  return (
    <Box>
      <Text fontSize={"1.35rem"} fontWeight={"bold"}>
        Download
      </Text>
      <form>
        <table class="w3-table w3-striped w3-border">
          <thead>
            <tr>
              <th>Size</th>
              <th>Dimensions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small</td>
              <td>180x140</td>
              <td>
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      id="express"
                      name="optradio"
                      checked={width === 180}
                      onClick={() => {
                        setWidth(180);
                        setLargeImageSelected(false);
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>340x240</td>
              <td>
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      id="express"
                      name="optradio"
                      onClick={() => {
                        setWidth(340);
                        setLargeImageSelected(false);
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Big</td>
              <td>640x560</td>
              <td>
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      id="express"
                      name="optradio"
                      onClick={() => {
                        setWidth(640);
                        setLargeImageSelected(false);
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Original</td>
              <td>1280x1080</td>
              <td>
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      id="express"
                      name="optradio"
                      onClick={() => {
                        setLargeImageSelected(true);
                        setWidth(1280);
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Button
        mt={2}
        size="lg"
        w={"100%"}
        colorScheme="green"
        isLoading={loading}
        loadingText={"loading..."}
        onClick={() => {
          handleImageDownload(downloadURL);
        }}
      >
        Download for free!
      </Button>
    </Box>
  );
};

function handleImageDownload(imageUrl) {
  const linkEl = document.createElement("a");
  linkEl.href = imageUrl;
  linkEl.download = "image";
  document.body.appendChild(linkEl);
  linkEl.click();
  document.body.removeChild(linkEl);
}

export default DownloadImage;
