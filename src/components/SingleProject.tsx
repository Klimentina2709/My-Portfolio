import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../types";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Icon,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { database } from "../db";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 1,
  delay: 0.2,
  ease: "easeInOut",
};

const SingleProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project: Project | undefined = database.projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Box mt={20} bg="gray.100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={transition}
        viewport={{ once: true }}
      >
        <Box
          position="relative"
          width="100%"
          height="75vh"
          overflow="hidden"
          boxShadow="lg"
          borderRadius="md"
          _hover={{
            ".overlay": {
              opacity: 1,
            },
            img: {
              filter: "brightness(0.7) blur(1px)",
            },
          }}
        >
          <Image
            src={project.secondImage}
            filter="blur(2px)"
            alt="Second project image"
            width="100%"
            height="100%"
            objectFit="cover"
            transition="filter 0.6s ease, transform 0.6s ease"
            transform="scale(1)"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
          <Box
            className="overlay"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            opacity="0"
            transition="opacity 0.4s ease" // Slightly slower transition for overlay text
            bg="rgba(0, 0, 0, 0.4)" // Slightly darker background for better readability
            color="white"
            p={10}
          >
            <Text fontSize="xl">Project Screenshot</Text>
          </Box>
        </Box>
      </motion.div>

      <Box bg="#252934" py={8} color="white">
        <Flex justifyContent="space-between" maxW="80%" mx="auto">
          <Box>
            <Box
              display="flex"
              alignItems="center"
              mb={2}
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              <IconButton aria-label="go back" size="small">
                <ArrowBackIcon fontSize="small" />
              </IconButton>
              <Text
                fontSize="sm"
                ml={1}
                style={{ textDecoration: "underline" }}
              >
                Go to the Previous Page
              </Text>
            </Box>

            <Text fontSize="3xl" fontWeight="bold">
              {project.title}
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              Project was made:
            </Text>
            <Text fontSize="md" mb={4}>
              {project.duration}
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box maxW="80%" mx="auto" bg="white" px={{ base: 4, md: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={transition}
          viewport={{ once: true }}
        >
          <Box mb={6} pt={10}>
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
              mb={4}
            >
              {project.technologies.map((tech, index) => (
                <Box
                  my={8}
                  key={index}
                  bg="gray.200"
                  color="gray.800"
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontSize="xl"
                  transition="background-color 0.3s ease"
                  _hover={{
                    bg: "teal.500",
                    color: "white",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
            <Text fontSize="xl" lineHeight="tall" mb={4}>
              {project.detailedDescription}
            </Text>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={transition}
          viewport={{ once: true }}
        >
          <Heading as="h3" my={10}>
            Project screenshot
          </Heading>

          <Image
            src={project.image}
            alt="Main project image"
            objectFit="cover"
            maxW="50%"
            mx="auto"
            borderRadius="md"
            boxShadow="lg"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={transition}
          viewport={{ once: true }}
        >
          <Box mt={10} mb={6} py={10} pl={4}>
            <Text fontSize="3xl" fontWeight="bold" mb={6}>
              Some of the features this project has:
            </Text>

            <Box as="ul" fontSize="xl" color="gray.900" mb={4}>
              {project.features.map((feature, index) => (
                <Box as="li" key={index} mb={2}>
                  {feature}
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

        <Flex justifyContent="center" pb={10}>
          <Button
            as="a"
            href={project.viewCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            mr={5}
            width="200px"
            colorScheme="teal"
            _hover={{ bg: "teal.600" }}
            rightIcon={<Icon as={FaGithub} />}
          >
            View Code
          </Button>
          {project.viewProjectLink && (
            <Button
              as="a"
              href={project.viewProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              width="200px"
              colorScheme="teal"
              _hover={{ bg: "teal.600" }}
              rightIcon={<Icon as={FaArrowRight} />}
            >
              View Project Live
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default SingleProject;
