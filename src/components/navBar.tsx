import { HStack, Box } from "@chakra-ui/react";
import { MdMedicalServices } from "react-icons/md";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box padding="10px" width="100%">
      <HStack justify="space-between" width="100%">
        <MdMedicalServices size={48} color="#3182ce" />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
