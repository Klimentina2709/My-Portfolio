import { NavLink } from "react-router-dom";
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <Box
      as="nav"
      p={4}
      bg="white"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position={{ base: "relative", md: "fixed" }}
      top="0"
      width="100%"
      zIndex="10"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="80%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "teal.900" : "teal",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            transform: isActive ? "scale(1.3)" : "scale(1.1)",
            marginBottom: isActive ? "8px" : "0",
          })}
        >
          {"<Klimentina />"}
        </NavLink>

        <Flex
          gap={{ base: 4, md: 10 }}
          align="center"
          justify="center"
          direction={{ base: "column", md: "row" }}
          mt={{ base: 4, md: 0 }}
        >
          {["/projects", "/about"].map((link) => (
            <NavLink
              key={link}
              to={link}
              onClick={() => window.scrollTo(0, 0)}
              style={({ isActive }) => ({
                color: isActive ? "teal.900" : "teal",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                transform: isActive ? "scale(1.3)" : "scale(1.1)",
                marginBottom: isActive ? "8px" : "0",
              })}
            >
              {link === "/projects" ? "Projects" : "About Me"}
            </NavLink>
          ))}

          <Flex gap={4} mt={{ base: 4, md: 0 }}>
            <IconButton
              as="a"
              href="https://github.com/Klimentina2709"
              aria-label="GitHub"
              target="_blank"
              icon={<FaGithub style={{ fontSize: "1.5rem" }} />}
              color="teal"
              variant="ghost"
              size="lg"
              _hover={{
                color: "teal.900",
                transform: "scale(1.3)",
              }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/klimentina-sokolovska-752a201b5/"
              aria-label="LinkedIn"
              target="_blank"
              icon={<FaLinkedin style={{ fontSize: "1.5rem" }} />}
              color="teal"
              variant="ghost"
              size="lg"
              _hover={{
                color: "teal.900",
                transform: "scale(1.3)",
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
