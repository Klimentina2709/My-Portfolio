import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  paragraph: string;
  children: React.ReactNode;
}

function SkillCard({ icon, title, children, paragraph }: Props) {
  return (
    <Box
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="white"
      p={4}
      w={{ base: "100%", md: "45%" }}
      transition="all 0.2s"
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.05)",
        borderColor: "teal.400",
      }}
    >
      <Flex
        justifyContent="space-between"
        mb={6}
        borderBottom="2px solid"
        borderColor="gray.200"
        pb={2}
      >
        <Text
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="teal.900"
        >
          {title}
        </Text>
        <Icon
          as={icon}
          boxSize={8}
          color="teal.900"
          mr={6}
          transition="transform 0.3s"
          _hover={{
            transform: "rotate(15deg)",
          }}
        />
      </Flex>
      <Box m={2}>
        <Text as="span" fontSize={{ base: "md", md: "xl" }} color="gray.700">
          {paragraph}
        </Text>
      </Box>

      <Box fontSize="xl" color="gray.600" mt={4}>
        {children}
      </Box>
    </Box>
  );
}

export default SkillCard;
