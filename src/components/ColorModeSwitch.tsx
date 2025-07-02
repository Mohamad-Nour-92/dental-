import { HStack, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button
        colorScheme="green"
        variant="outline"
        size="sm"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "🌙" : "☀️"}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
