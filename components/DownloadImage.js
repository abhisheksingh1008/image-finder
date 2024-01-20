"use client";

import { useState } from "react";
import Link from "next/link";
import { Box, Button, Text } from "@chakra-ui/react";

const DownloadImage = ({ image }) => {
  const [width, setWidth] = useState(180);

  let downloadUrl = image.webformatURL.split("_")[0];

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
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Original</td>
              <td>960x720</td>
              <td>
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      id="express"
                      name="optradio"
                      onClick={() => {
                        setWidth(960);
                      }}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link
        target="_blank"
        href={`${downloadUrl}_${width}.jpg`}
        download={`${downloadUrl}_${width}.jpg`}
      >
        <Button mt={2} w={"100%"} colorScheme="green" size="lg">
          Download for free!
        </Button>
      </Link>
    </Box>
  );
};

export default DownloadImage;

// const RadioItem = ({ size, width, height }) => {
//   return (
//     <Box
//       p={2}
//       display={"flex"}
//       alignItems={"flex-start"}
//       justifyContent={"flex-start"}
//     >
//       <Text ml={1}>{size}</Text>
//       <Text ml={2}>
//         {width}x{height}
//       </Text>
//     </Box>
//   );
// };

// const TableRow = ({ size, width, height }) => {
//   return (
//     <Tr>
//       <Td>{size}</Td>
//       <Td>
//         <b>
//           {width}*{height}
//         </b>
//       </Td>
//     </Tr>
//   );
// };

{
  /* <TableContainer w={"100%"}>
  <Table size={"sm"} variant="simple" colorScheme="teal">
    <Thead>
      <Tr>
        <Th>Size</Th>
        <Th>Dimensions</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      <form>
        <Tr>
          <Td>Small</Td>
          <Td>ndkfnkdj</Td>
          <Td>
            <Radio value="1"></Radio>
          </Td>
        </Tr>
        <Tr>
          <Td>Medium</Td>
          <Td>kldsdskfn</Td>
          <Td>
            <Radio value="2"></Radio>
          </Td>
        </Tr>
        <Tr>
          <Td>Big</Td>
          <Td></Td>
          <Td>
            <Radio value="3"></Radio>
          </Td>
        </Tr>
        <Tr>
          <Td>Original</Td>
          <Td></Td>
          <Td>
            <Radio value="4"></Radio>
          </Td>
        </Tr>
      </form>
    </Tbody>
  </Table>
</TableContainer>; */
}

{
  /* <RadioGroup defaultValue="1" colorScheme="green">
  <Box display="flex" flexDir="column">
    <Radio value="1">
      <RadioItem size={"Small"} width={640} height={960} />
    </Radio>
    <Radio value="2">
      <RadioItem size={"Medium"} width={1920} height={2660} />
    </Radio>
    <Radio value="3">
      <RadioItem size={"Big"} width={2400} height={3600} />
    </Radio>
    <Radio value="4">
      <RadioItem
        size={"Original"}
        width={image.imageWidth}
        height={image.imageHeight}
      />
    </Radio>
  </Box>
</RadioGroup>; */
}

{
  /* <Tr>
              <Td>One</Td>
              <Td>two</Td>
            </Tr>
            <RadioGroup defaultValue="1" colorScheme="green">
              <Radio value="1">
                <TableRow size={"Small"} width={640} height={960} />
              </Radio>
              <Tr>
                <Radio value="2">
                  <TableRow size={"Medium"} width={1920} height={2660} />
                </Radio>
              </Tr>
              <Tr>
                <Radio value="3">
                  <TableRow size={"Big"} width={2400} height={3600} />
                </Radio>
              </Tr>
              <Tr>
                <Radio value="4">
                  <TableRow
                    size={"Original"}
                    width={image.imageWidth}
                    height={image.imageHeight}
                  />
                </Radio>
              </Tr>
            </RadioGroup> */
}
