import { Box, Flex, Text, Link as ChakraLink, Input } from "@chakra-ui/react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box bg="teal.500" py={{ base: 6, md: 8 }}>
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-evenly"
      maxW="80%"
      mx="auto"
      align="center"
      px={{ base: 6, md: 12 }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Flex direction="column" align="flex-start" mb={{ base: 6, md: 0 }}>
        <Box
          color="white"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          mb={3}
          _hover={{ textDecoration: "underline", color: "gray.200" }}
          transition="color 0.3s ease, text-decoration 0.3s ease"
        >
          <ChakraLink as={Link} to="/" display="flex" alignItems="center">
            <FaHome style={{ marginRight: "8px" }} />
            Homepage
          </ChakraLink>
        </Box>

        <Box
          color="white"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          mb={3}
          _hover={{ textDecoration: "underline", color: "gray.200" }}
          transition="color 0.3s ease, text-decoration 0.3s ease"
        >
          <ChakraLink as={Link} to="/about" display="flex" alignItems="center">
            <FaUser style={{ marginRight: "8px" }} />
            About
          </ChakraLink>
        </Box>

        <Box
          color="white"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          mb={3}
          _hover={{ textDecoration: "underline", color: "gray.200" }}
          transition="color 0.3s ease, text-decoration 0.3s ease"
        >
          <ChakraLink
            as={Link}
            to="/projects"
            display="flex"
            alignItems="center"
          >
            <FaFolderOpen style={{ marginRight: "8px" }} />
            Projects
          </ChakraLink>
        </Box>
      </Flex>

      <Flex direction="column">
        <Box color="white" fontSize={{ base: "sm", md: "md" }} mb={3}>
          <Flex align="center">
            <FaEnvelope style={{ marginRight: "8px" }} />
            <ChakraLink
              href="mailto:sokolovska.klimentina27@gmail.com"
              color="white"
              _hover={{ color: "gray.200", textDecoration: "underline" }}
            >
              Contact Me
            </ChakraLink>
          </Flex>
        </Box>

        <Input
          id="email"
          value="sokolovska.klimentina27@gmail.com"
          isReadOnly
          bg="gray.200"
          color="gray.700"
          _hover={{ bg: "gray.300" }}
          _focus={{ borderColor: "teal.500" }}
          mb={4}
          size="sm"
          textAlign="center"
        />

        <Text color="white" fontSize={{ base: "xs", md: "sm" }}>
          © 2024 Klimentina. All rights reserved.
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
