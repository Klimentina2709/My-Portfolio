import { useEffect, useState } from "react";
import { Box, useTheme } from "@chakra-ui/react";

const PaintAnimation = () => {
  const [animationState, setAnimationState] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="absolute" width="100%" height="100%" overflow="hidden">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M10,20 Q20,5 30,20 T50,20 Q40,35 50,50 T70,30 Q60,60 80,40 T100,50"
          fill={theme.colors.blue[400]}
          opacity={animationState ? 0.7 : 0}
        />
        <path
          d="M15,30 Q25,15 35,30 T55,30 Q45,45 55,60 T75,40 Q65,70 85,50 T100,70"
          fill={theme.colors.red[400]}
          opacity={animationState ? 0.5 : 0}
        />
        <path
          d="M5,10 Q15,25 25,10 T45,15 Q30,35 45,45 T70,25 Q50,60 80,35 T100,60"
          fill={theme.colors.green[400]}
          opacity={animationState ? 0.6 : 0}
        />
      </svg>
      <style>
        {`
          svg {
            animation: paintAnimation 3s ease-in-out forwards;
          }

          @keyframes paintAnimation {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default PaintAnimation;
