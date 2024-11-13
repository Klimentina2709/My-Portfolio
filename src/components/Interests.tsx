import { Box, Icon, Text } from "@chakra-ui/react";
import {
  FaBook,
  FaPen,
  FaCamera,
  FaCode,
  FaDumbbell,
  FaMusic,
  FaFilm,
  FaPaintBrush,
  FaPalette,
} from "react-icons/fa";

const iconsList = [
  { icon: FaBook, name: "Reading" },
  { icon: FaPen, name: "Writing" },
  { icon: FaCamera, name: "Photography" },
  { icon: FaCode, name: "Coding" },
  { icon: FaDumbbell, name: "Exercising" },
  { icon: FaMusic, name: "Music" },
  { icon: FaFilm, name: "Movies" },
  { icon: FaPaintBrush, name: "Painting" },
  { icon: FaPalette, name: "Design" },
];

const Interests = () => {
  return (
    <Box
      background="teal"
      overflow="hidden"
      whiteSpace="nowrap"
      p={4}
      width="100%"
      height="auto"
    >
      <Box maxW="80%" mx="auto">
        <Box
          display="flex"
          overflowX="auto"
          gap={4}
          color="white"
          justifyContent="space-evenly"
          px={2}
          alignItems="center"
        >
          {iconsList.map((iconObj, index) => (
            <Box
              key={index}
              p={4}
              borderWidth={1}
              borderRadius="md"
              textAlign="center"
              display="inline-block"
              minWidth="120px"
              mx={2}
            >
              <Icon as={iconObj.icon} boxSize={10} />
              <Text mt={2}>{iconObj.name}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Interests;
