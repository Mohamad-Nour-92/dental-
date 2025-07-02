import {
  Box,
  VStack,
  Heading,
  Divider,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // Color mode aware values
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "white");
  const navigate = useNavigate();

  return (
    <Box
      width="300px"
      bg={bgColor}
      p={6}
      height="100vh"
      borderRight="1px solid"
      borderColor={borderColor}
      overflowY="auto"
    >
      <VStack spacing={6} align="stretch">
        <Heading size="lg" mb={4} color={headingColor}>
          Patient Management
        </Heading>

        <Button
          colorScheme="green"
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => navigate("/")}
          size="lg"
        >
          Current Patient
        </Button>

        <Divider borderColor={borderColor} />

        <Button
          colorScheme="yellow"
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => navigate("/awaiting")}
          size="lg"
        >
          Awaiting Patient
        </Button>

        <Divider borderColor={borderColor} />

        <Button
          colorScheme="blue"
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => navigate("/coming")}
          size="lg"
        >
          Coming Patient
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
