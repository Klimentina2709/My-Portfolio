import React, { useState, useRef } from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface LineStyle {
  points: string;
}

const Banner: React.FC = () => {
  const [line, setLine] = useState<LineStyle>({ points: "M0,0" });
  const [lineOpacity, setLineOpacity] = useState<number>(1);
  const [fadeOutTimeout, setFadeOutTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setLine((prevLine) => ({
      points: `${prevLine.points} L${clientX},${clientY}`,
    }));
    setLineOpacity(1);
    if (fadeOutTimeout) {
      clearTimeout(fadeOutTimeout);
    }
    const newFadeOutTimeout = setTimeout(() => {
      startFadeOut();
    }, 5000);
    setFadeOutTimeout(newFadeOutTimeout);
  };

  const startFadeOut = () => {
    const fadeOutDuration = 10000;
    const intervalDuration = 100;
    let currentOpacity = 1;
    const fadeOutInterval = setInterval(() => {
      currentOpacity -= intervalDuration / fadeOutDuration;
      setLineOpacity(currentOpacity);
      if (currentOpacity <= 0) {
        clearInterval(fadeOutInterval);
        setLine({ points: "M0,0" });
        setLineOpacity(1);
      }
    }, intervalDuration);
  };

  const [text] = useTypewriter({
    words: [
      "Front End Developer",
      "Web Designer",
      "UX/UI",
      "Design",
      "JavaScript Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Next section ref is not defined.");
    }
  };

  return (
    <Box
      position="relative"
      height={{ base: "70vh", md: "85vh" }}
      bg="#252934"
      color="white"
      overflow="hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <path
          d={line.points}
          stroke="rgba(0, 128, 128, 0.7)"
          strokeWidth="3"
          fill="none"
          style={{ transition: "opacity 1s ease", opacity: lineOpacity }}
        />
      </svg>

      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        zIndex={1}
        height="100%"
        px={{ base: 4, sm: 6, md: 8 }}
      >
        <Box
          as="span"
          fontFamily="Playfair Display"
          fontSize={{ base: "4xl", md: "8xl" }}
          fontWeight="bold"
        >
          <span>{text}</span>
          <Cursor />
        </Box>

        <Box
          as="button"
          onClick={scrollToNextSection}
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          mt={8}
          borderRadius="50%"
          border="2px solid teal"
          p={3}
          _hover={{ borderColor: "teal.400" }}
        >
          <Icon
            as={ArrowDownIcon}
            boxSize={{ base: 6, sm: 8 }}
            color="teal"
            _hover={{ color: "teal.400" }}
          />
        </Box>
      </Flex>

      {hovered && (
        <Box
          as="button"
          position="absolute"
          bottom={{ base: "10px", sm: "20px" }}
          right={{ base: "10px", sm: "20px" }}
          bg="transparent"
          color="gray.500"
          border="none"
          fontSize="lg"
          opacity={1}
          p={2}
          transition="opacity 0.3s ease"
        >
          You can draw something here
        </Box>
      )}

      <Box ref={nextSectionRef} />
    </Box>
  );
};

export default Banner;
