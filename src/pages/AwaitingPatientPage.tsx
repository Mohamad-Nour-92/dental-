import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  VStack,
  Badge,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useCurrentPatient } from "../context/CurrentPatientHelpers";
import { useNavigate } from "react-router-dom";

const awaitingPatients = [
  { id: 1, name: "مروان عيسى", hour: "09:15", emergency: true },
  { id: 2, name: "جنى خليل", hour: "09:30", emergency: false },
  { id: 3, name: "سامي درويش", hour: "09:45", emergency: false },
  { id: 4, name: "هند منصور", hour: "10:00", emergency: true },
  { id: 5, name: "وسيم جابر", hour: "10:15", emergency: false },
];

const AwaitingPatientPage = () => {
  const { setCurrentPatient } = useCurrentPatient();
  const navigate = useNavigate();

  const handleMoveToCurrent = (patient: (typeof awaitingPatients)[0]) => {
    setCurrentPatient({
      id: patient.id,
      name: patient.name,
      appointmentTime: patient.hour,
      status: patient.emergency ? "Emergency" : "Awaiting",
    });
    navigate("/");
  };

  return (
    <Box p={6}>
      <Heading size="lg" mb={4} color="yellow.500">
        Awaiting Patient
      </Heading>
      <List spacing={4}>
        {awaitingPatients.map((patient) => (
          <ListItem
            key={patient.id}
            p={4}
            bg="white"
            _dark={{ bg: "gray.700" }}
            borderRadius="md"
            boxShadow="sm"
          >
            <HStack spacing={4}>
              <Avatar name={patient.name} />
              <VStack align="start" spacing={1} flex={1}>
                <Text fontWeight="bold">{patient.name}</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  _dark={{ color: "gray.300" }}
                >
                  Entered at: {patient.hour}
                </Text>
              </VStack>
              <Badge
                colorScheme={patient.emergency ? "red" : "yellow"}
                fontSize="0.9em"
              >
                {patient.emergency ? "Emergency" : "Normal"}
              </Badge>
              <Button
                colorScheme="green"
                size="sm"
                onClick={() => handleMoveToCurrent(patient)}
              >
                Move to Current
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AwaitingPatientPage;
