import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./style/style.css";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ChakraProvider>
);
