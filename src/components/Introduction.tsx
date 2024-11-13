import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MySection: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box maxW="80%" mx="auto" my={20} px={{ base: 4, md: 8 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Heading
          as="h1"
          mb={4}
          flex="1"
          maxW={{ base: "100%", md: "35%" }}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Designing Experiences, and Building the Web
        </Heading>
        <Box flex="2" maxW={{ base: "100%", md: "65%" }}>
          <Text fontSize="xl" lineHeight="tall" mb={4}>
            I'm a Front-End Developer focused on building responsive,
            user-centered web applications. A recent graduate of Brainster’s
            Front-End Academy, I’m skilled in HTML, CSS, JavaScript, TypeScript,
            React, Next.js, Tailwind CSS, with experience in seamless API
            integrations and mobile-first development. Passionate about UI/UX
            design, creating intuitive and visually engaging interfaces using
            tools like Figma and Adobe Creative Suite...
          </Text>
          <Box textAlign="end" mt={10}>
            <Link to="/about" onClick={handleLinkClick}>
              <Button colorScheme="teal" size="lg">
                About Me
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MySection;
