import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FaReact, FaHtml5, FaSass, FaCss3, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiFigma,
  SiChakraui,
  SiPostman,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiTypescript,
} from "react-icons/si";

const iconsList = [
  { icon: FaReact, name: "React" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaSass, name: "Sass" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiChakraui, name: "Chakra UI" },
  { icon: SiMui, name: "Material UI" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: SiAdobephotoshop, name: "Adobe Photoshop" },
  { icon: SiAdobeillustrator, name: "Adobe Illustrator" },
  { icon: SiAdobeindesign, name: "Adobe InDesign" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVisualstudiocode, name: "VS Code" },
];

const HorizontalScroll: React.FC = () => {
  return (
    <Box
      background="teal"
      overflow="hidden"
      whiteSpace="nowrap"
      p={4}
      width="100%"
      height="150px"
    >
      <Box
        display="flex"
        width="max-content"
        animation="scroll-right 30s linear infinite"
        color="white"
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
            fontSize={{ base: "lg", md: "xl" }}
            mx={2}
          >
            <Icon as={iconObj.icon} boxSize={10} />
            <Text mt={2}>{iconObj.name}</Text>
          </Box>
        ))}
        {iconsList.map((iconObj, index) => (
          <Box
            key={iconsList.length + index}
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

      <style>
        {`
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HorizontalScroll;
