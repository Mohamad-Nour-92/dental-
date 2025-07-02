import { Box, Stack } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import Sidebar from "./components/Sidebar";
import CurrentPatientView from "./components/CurrentPatientView";
import { Outlet, Routes, Route } from "react-router-dom";
import AwaitingPatientPage from "./pages/AwaitingPatientPage";
import ComingPatientPage from "./pages/ComingPatientPage";

function Layout() {
  return (
    <Box width="100%" minHeight="100vh">
      <NavBar />
      <Stack
        direction={["column", "row"]}
        align="flex-start"
        spacing={0}
        width="100%"
      >
        <Sidebar />
        <Box flex={1} width="100%">
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CurrentPatientView />} />
        <Route path="awaiting" element={<AwaitingPatientPage />} />
        <Route path="coming" element={<ComingPatientPage />} />
      </Route>
    </Routes>
  );
}

export default App;
