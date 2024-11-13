import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import SingleCard from "./SingleCard";
import { Link as RouterLink } from "react-router-dom";
import { database } from "../db";
import { Project } from "../types";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 1.5,
  delay: 0.2,
  ease: "easeInOut",
};

export const MoreProjects = () => {
  const projects: Project[] = database.projects;

  return (
    <Box bg="gray.100">
      <Box maxW="80%" mx="auto" bg="white" pb={20}>
        <Heading as="h2" size="xl" mb={2} pt={32} px={{ base: 4, md: 8 }}>
          More Projects
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={10} px={{ base: 4, md: 8 }}>
          Here are a few of my selected projects that showcase the range of my
          skills and expertise. If you're interested in exploring more of my
          work, diving into some of my exercises, or seeing additional projects
          I've worked on, feel free to visit my GitHub for a deeper look at my
          portfolio.
        </Text>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={transition}
        >
          <Box maxW="60%" mx="auto">
            {projects.map((project) => (
              <Box mb={10} key={project.id}>
                <SingleCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.secondImage}
                  tools={project.technologies}
                  id={project.id}
                  viewCodeLink={project.viewCodeLink}
                />
              </Box>
            ))}
          </Box>
        </motion.div>

        <Box
          as={RouterLink}
          to="https://github.com/Klimentina2709"
          target="_blank"
        >
          <Box color="gray" textDecoration="underline" px={{ base: 4, md: 8 }}>
            If you're interested in seeing more of my work, feel free to check
            out my GitHub.
            <Icon as={FaGithub} boxSize={5} ml={2} color="gray" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
