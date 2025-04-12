import React from "react";
import { Box, Heading, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SingleCard from "./SingleCard";
import { Project } from "../types";
import { database } from "../db";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  const projects: Project[] = database.projects;

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box bg="gray.100">
      <Box
        maxW="80%"
        mx="auto"
        pt={20}
        pb={10}
        bg="white"
        px={{ base: 4, md: 8 }}
      >
        <Heading as="h2" size="xl" mb={2}>
          Selected projects
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={4}>
          From design to code, I handle every step to create user-friendly
          interfaces and functional websites. I specialize in translating
          creative ideas into seamless digital experiences that are both
          visually appealing and highly functional. These are my selected
          projects that showcase my skills and expertise.
        </Text>
        <Box
          as={RouterLink}
          to="https://github.com/Klimentina2709"
          target="_blank"
        >
          <Box color="gray" textDecoration="underline">
            More projects on my GitHub
            <Icon as={FaGithub} boxSize={5} ml={2} color="gray" />
          </Box>
        </Box>
      </Box>
      <Box bg="white" maxW="80%" mx="auto">
        <Box maxW="60%" mx="auto">
          {projects && projects.length > 0 ? (
            projects.slice(0, 4).map((project) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  key={project.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 1.5 }}
                >
                  <Box mb={10}>
                    <SingleCard
                      title={project.title}
                      description={project.description}
                      imageUrl={project.secondImage}
                      tools={project.technologies}
                      id={project.id}
                      viewCodeLink={project.viewCodeLink}
                    />
                  </Box>
                </motion.div>
              );
            })
          ) : (
            <p>No projects available</p>
          )}
        </Box>

        <Flex justifyContent="center" mt={4} pb={20}>
          <Button
            as={RouterLink}
            to="/projects"
            colorScheme="teal"
            onClick={handleLinkClick}
          >
            More Projects
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
