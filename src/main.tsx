import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CurrentPatientProvider } from "./context/CurrentPatientContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <CurrentPatientProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentPatientProvider>
    </ChakraProvider>
  </StrictMode>
);
