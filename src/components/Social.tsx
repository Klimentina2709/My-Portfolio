import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";

const Social = () => {
  return (
    <Box bg="teal.500">
      <Flex justify="space-between" align="center" maxW="80%" mx="auto" py={10}>
        <Text
          as="span"
          color="white"
          fontSize="3xl"
          fontWeight="bold"
          px={{ base: 4, md: 8 }}
        >
          Let's Connect
        </Text>
        <Flex>
          <IconButton
            as="a"
            href="https://github.com/Klimentina2709"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            fontSize="3xl"
            m={2}
            colorScheme="teal"
            variant="outline"
            color="white"
            _hover={{ color: "teal.500", bg: "white" }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/klimentina-sokolovska-752a201b5/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="3xl"
            m={2}
            colorScheme="teal"
            variant="outline"
            color="white"
            _hover={{ color: "teal.500", bg: "white" }}
          />
          <IconButton
            as="a"
            href="https://www.behance.net/klimentinasokolovska"
            target="_blank"
            aria-label="Behance"
            icon={<FaBehance />}
            fontSize="3xl"
            m={2}
            colorScheme="teal"
            variant="outline"
            color="white"
            _hover={{ color: "teal.500", bg: "white" }}
          />
          <IconButton
            as="a"
            href="mailto:sokolovska.klimentina27@gmail.com"
            target="_blank"
            aria-label="Email"
            icon={<FaEnvelope />}
            fontSize="3xl"
            m={2}
            colorScheme="teal"
            variant="outline"
            color="white"
            _hover={{ color: "teal.500", bg: "white" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Social;
