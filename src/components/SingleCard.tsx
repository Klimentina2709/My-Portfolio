import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ProjectCardProps } from "../types";

const SingleCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tools,
  viewCodeLink,
}) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor="white"
      direction={{ base: "column", md: "row" }}
      boxShadow="md"
      p={4}
      mb={6}
    >
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        width={{ base: "100%", md: "40%" }}
        borderRadius="md"
      />

      <Box p={5} flex="1">
        <Heading size="md" mb={2} fontSize={{ base: "xl", md: "lg" }}>
          {title}
        </Heading>
        <Box mb={4} fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Box>

        <Stack direction="row" spacing={3} mb={4} flexWrap="wrap">
          {tools.map((tool, index) => (
            <Box
              key={index}
              fontSize="sm"
              bg="gray.100"
              p={2}
              borderRadius="md"
              _hover={{
                bg: "teal",
                color: "white",
              }}
            >
              {tool}
            </Box>
          ))}
        </Stack>

        <Flex direction={{ base: "column", lg: "row" }} gap={4} width="100%">
          <Button
            as="a"
            href={viewCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            fontSize={{ base: "xs", md: "lg" }}
            width={{ base: "100%", lg: "auto" }}
            whiteSpace="wrap"
            colorScheme="teal"
            _hover={{ bg: "teal.600" }}
            rightIcon={<Icon as={FaGithub} />}
          >
            View Code
          </Button>
          <Button
            onClick={() => window.scrollTo(0, 0)}
            as={RouterLink}
            to={`/projects/${id}`}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            fontSize={{ base: "xs", md: "lg" }}
            variant="outline"
            width={{ base: "100%", lg: "auto" }}
            whiteSpace="wrap"
            textAlign="center"
            px={4}
          >
            Project Details
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SingleCard;
