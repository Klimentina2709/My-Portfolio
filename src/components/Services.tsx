import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { FaArrowRight, FaCode, FaTabletAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: FaTabletAlt,
    title: "UI/UX",
    paragraph:
      "I create prototypes that range from simple and intuitive to more complex and detailed, ensuring a balance of simplicity, convenience, and effectiveness.",
    skills: [
      "UI/UX Design",
      "Wireframing",
      "Visual Design",
      "Responsive Web Design",
      "Typography & Color Theory",
      "Design Systems",
    ],
  },
  {
    icon: FaCode,
    title: "Front-end Development",
    paragraph:
      "I build custom solutions from scratch, turning ideas into reality. I ensure everything aligns with the vision and provides a great user experience.",
    skills: [
      "HTML5 & CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Material UI (MUI)",
      "Chakra UI",
      "Framer Motion",
      "Tailwind CSS",
      "SASS/SCSS",
      "Version Control (Git/GitHub)",
      "API Integration (REST)",
    ],
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 1,
  delay: 0.2,
  ease: "easeInOut",
};

function Services() {
  return (
    <Box px={{ base: 4, md: 8 }} bg="gray.50" pt={20}>
      <Heading
        as="h3"
        size={{ base: "lg", md: "xl" }}
        mb={2}
        maxW="80%"
        mx="auto"
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Take a look at the variety of services I offer.
      </Heading>
      <Text
        fontSize={{ base: "md", md: "xl" }}
        color="gray.600"
        mb={4}
        maxW="80%"
        mx="auto"
        marginBottom={10}
      >
        From design to code, I handle every step to create user-friendly
        interfaces and functional websites.
      </Text>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={transition}
        viewport={{ once: true }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          gap={4}
          justifyContent={"space-between"}
          maxW="60%"
          mx="auto"
        >
          {servicesData.map(({ icon, title, skills, paragraph }) => (
            <SkillCard
              key={title}
              icon={icon}
              title={title}
              paragraph={paragraph}
            >
              <List spacing={2}>
                {skills.map((skill, index) => (
                  <ListItem key={index}>
                    <Flex align="center" direction="row" justify="center">
                      <Icon as={FaArrowRight} ml={2} mr={4} color={"teal"} />
                      <Text flexGrow={1}>{skill}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </List>
            </SkillCard>
          ))}
        </Box>
      </motion.div>

      <Center py={20}>
        <HStack spacing={4}>
          <Button
            colorScheme="teal"
            onClick={() =>
              window.open("/CV/KlimentinaSokolovska.pdf", "_blank")
            }
          >
            View My CV
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/CV/KlimentinaSokolovska.pdf";
              link.download = "KlimentinaSokolovska_CV.pdf";
              link.click();
            }}
          >
            Download My CV
          </Button>
        </HStack>
      </Center>
    </Box>
  );
}

export default Services;
