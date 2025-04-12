import {
  Box,
  VStack,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
  Button,
} from "@chakra-ui/react";
import Interests from "./Interests";
import { questionsAndAnswers } from "../db";
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

function About() {
  return (
    <Box bg="gray.100">
      <Box
        px={6}
        py={10}
        bg="white"
        maxW="80%"
        mx="auto"
        mt={20}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="flex-start"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={transition}
          viewport={{ once: true }}
        >
          <Box flex="1" pr={5} my={6}>
            <Heading as="h2" size={{ base: "xl", lg: "2xl" }} mb={16}>
              👋 Hi there! I’m Klimentina
            </Heading>
            <VStack spacing={10} align="start" pr={10}>
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                I’m a Front-End Developer and Web Designer who loves creating
                websites that look great and work smoothly. My journey began in
                the world of art, where I earned a Bachelor of Fine Arts in
                Classical Painting. This experience helped me develop a strong
                appreciation for design and composition, which I now bring into
                the digital world.
              </Text>
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Then, I continued my education at{" "}
                <strong>Brainster - Front End Academy</strong>. At Brainster, I
                embarked on my Front-End Development journey, learning many
                important skills, including JavaScript, React.js, Next.js,
                TypeScript, and Git. This time was a turning point for me, as I
                gained the technical skills needed to build modern websites.
              </Text>
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Throughout my time at Brainster, I not only mastered the
                fundamentals of web development but also explored advanced
                topics such as responsive design and performance optimization.
                Collaborating on hands-on projects allowed me to apply my skills
                in real-world scenarios, developing a strong understanding of
                modern web practices. I became proficient in using tools like
                Bootstrap and Tailwind CSS for styling, as well as Material-UI
                for building robust, accessible components, and much more.
              </Text>
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                My journey at Brainster was not just about learning; it was also
                about community. Engaging with fellow students and mentors
                fostered a collaborative environment where we shared ideas and
                provided feedback on each other’s projects, enhancing our
                learning experience. I left the program not only with a solid
                technical foundation but also with a network of talented
                individuals who inspire and motivate me.
              </Text>
            </VStack>

            {/* <Button
              mt={10}
              colorScheme="teal"
              onClick={() =>
                window.open("/CV/KlimentinaSokolovska.pdf", "_blank")
              }
            >
              Here you can view My CV
            </Button> */}
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          transition={{ ...transition, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            pt={6}
            flex="1"
            display="flex"
            alignItems="flex-start"
            mb={{ base: 6, md: 0 }}
          >
            <Image
              src="/My-Portfolio/images/aboutMe.jpg"
              alt="Klimentina"
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={transition}
        viewport={{ once: true }}
      >
        <Heading
          as="h2"
          size={{ base: "xl", lg: "2xl" }}
          py={10}
          bg="white"
          maxW="80%"
          mx="auto"
          pl={6}
        >
          My Interests
        </Heading>
        <Interests />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={transition}
        viewport={{ once: true }}
      >
        <Box maxW="80%" mx="auto" pt={20} bg="white">
          <Heading as="h2" size={{ base: "xl", lg: "2xl" }} pb={10} pl={6}>
            Frequently Asked Questions
          </Heading>
          <Box p={5} pb={10}>
            <Accordion allowMultiple>
              {questionsAndAnswers.accordion.map((qa, index) => (
                <AccordionItem
                  key={index}
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  mb={2}
                >
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        bg={isExpanded ? "gray.200" : "white"}
                        _hover={{ bg: "gray.100" }}
                        _expanded={{ bg: "gray.200" }}
                        py={4}
                        borderRadius="md"
                      >
                        <Box flex="1" textAlign="left" fontWeight="semibold">
                          {qa.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        px={4}
                        bg="gray.50"
                        borderBottomRadius="md"
                      >
                        {qa.answer}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default About;
