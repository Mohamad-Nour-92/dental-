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
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

const initialPatients = [
  {
    id: 1,
    name: "أحمد العلي",
    number: "+963 944 123 456",
    date: "2024-07-01",
  },
  {
    id: 2,
    name: "سارة يوسف",
    number: "+963 933 234 567",
    date: "2024-07-02",
  },
  { id: 3, name: "محمد درويش", number: "+963 988 345 678", date: "2024-07-03" },
  { id: 4, name: "ليلى خليل", number: "+963 991 456 789", date: "2024-07-04" },
  {
    id: 5,
    name: "رامي الحسن",
    number: "+963 995 567 890",
    date: "2024-07-05",
  },
  {
    id: 6,
    name: "نور الزين",
    number: "+963 944 678 901",
    date: "2024-07-06",
  },
  {
    id: 7,
    name: "هبة عيسى",
    number: "+963 933 789 012",
    date: "2024-07-07",
  },
  {
    id: 8,
    name: "خالد منصور",
    number: "+963 988 890 123",
    date: "2024-07-08",
  },
  { id: 9, name: "ديمة شريف", number: "+963 991 901 234", date: "2024-07-09" },
  {
    id: 10,
    name: "فادي جابر",
    number: "+963 995 012 345",
    date: "2024-07-10",
  },
];

const ComingPatientPage = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ name: "", date: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", date: "" };
    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!date) {
      newErrors.date = "Date is required";
      valid = false;
    } else if (isNaN(Date.parse(date))) {
      newErrors.date = "Invalid date";
      valid = false;
    } else if (new Date(date) < new Date(new Date().toDateString())) {
      newErrors.date = "Date cannot be in the past";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setPatients([
      ...patients,
      {
        id: patients.length + 1,
        name,
        number: "",
        date,
      },
    ]);
    setName("");
    setDate("");
    setShowForm(false);
    setErrors({ name: "", date: "" });
  };

  const handleRemovePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <Box p={[2, 4, 6]}>
      <Heading size="lg" mb={[2, 4]} color="blue.500">
        Coming Patient
      </Heading>
      <Button
        colorScheme="blue"
        mb={[2, 4]}
        onClick={() => setShowForm((v) => !v)}
      >
        {showForm ? "Cancel" : "Add New Patient"}
      </Button>
      {showForm && (
        <Box as="form" mb={[4, 6]} onSubmit={handleAddPatient}>
          <HStack spacing={[2, 4]} align="end" flexWrap="wrap">
            <FormControl isInvalid={!!errors.name} isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter patient name"
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.date} isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="green" type="submit">
              Add
            </Button>
          </HStack>
        </Box>
      )}
      <List spacing={[2, 4]}>
        {patients.map((patient) => (
          <ListItem
            key={patient.id}
            p={[2, 4]}
            bg="white"
            _dark={{ bg: "gray.700" }}
            borderRadius="md"
            boxShadow="sm"
          >
            <HStack spacing={[2, 4]} flexWrap="wrap">
              <Avatar name={patient.name} />
              <VStack align="start" spacing={1} flex={1}>
                <Text fontWeight="bold">{patient.name}</Text>
                {patient.number && (
                  <Text
                    fontSize="sm"
                    color="gray.500"
                    _dark={{ color: "gray.300" }}
                  >
                    {patient.number}
                  </Text>
                )}
              </VStack>
              <Badge colorScheme="blue" fontSize="0.9em">
                {patient.date}
              </Badge>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleRemovePatient(patient.id)}
                leftIcon={<CloseIcon boxSize={2.5} />}
                variant="outline"
              >
                Remove
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ComingPatientPage;
