import { HStack, Box } from "@chakra-ui/react";
import { MdMedicalServices } from "react-icons/md";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box padding={["8px", "10px"]} width="100%">
      <HStack
        justify="space-between"
        width="100%"
        flexDirection={["column", "row"]}
        spacing={[2, 4]}
      >
        <MdMedicalServices
          size={40}
          color="#3182ce"
          style={{ marginBottom: 4 }}
        />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
