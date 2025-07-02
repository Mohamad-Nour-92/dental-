import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Card,
  CardBody,
  Grid,
  Avatar,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useCurrentPatient } from "../context/CurrentPatientHelpers";

const CurrentPatientView = () => {
  const { currentPatient } = useCurrentPatient();

  return (
    <Box p={6}>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <HStack justify="space-between" align="center">
          <VStack align="start" spacing={1}>
            <Heading size="lg">Current Patient</Heading>
            <Text color="gray.600">Active treatment session</Text>
          </VStack>
          <Badge colorScheme="green" size="lg" p={2}>
            {currentPatient.status}
          </Badge>
        </HStack>

        <Divider />

        {/* Patient Basic Info */}
        <Card>
          <CardBody>
            <HStack spacing={6} align="start">
              <Avatar size="xl" name={currentPatient.name} />
              <VStack align="start" spacing={2} flex={1}>
                <Heading size="md">{currentPatient.name}</Heading>
                <HStack spacing={4}>
                  <Text fontSize="sm" color="gray.600">
                    Age: {currentPatient.age} | {currentPatient.gender}
                  </Text>
                  <Badge colorScheme="blue">{currentPatient.treatment}</Badge>
                </HStack>

                <HStack spacing={6} mt={2}>
                  <HStack>
                    <Icon as={FaClock} color="blue.500" />
                    <Text fontSize="sm">{currentPatient.appointmentTime}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaPhone} color="green.500" />
                    <Text fontSize="sm">{currentPatient.phone}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaEnvelope} color="purple.500" />
                    <Text fontSize="sm">{currentPatient.email}</Text>
                  </HStack>
                </HStack>

                <HStack>
                  <Icon as={FaMapMarkerAlt} color="red.500" />
                  <Text fontSize="sm">{currentPatient.address}</Text>
                </HStack>
              </VStack>
            </HStack>
          </CardBody>
        </Card>

        {/* Treatment Details */}
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {/* Vital Signs */}
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                Vital Signs
              </Heading>
              <VStack spacing={3} align="stretch">
                <HStack justify="space-between">
                  <Text>Blood Pressure:</Text>
                  <Text fontWeight="bold">
                    {currentPatient.vitalSigns?.bloodPressure}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Heart Rate:</Text>
                  <Text fontWeight="bold">
                    {currentPatient.vitalSigns?.heartRate}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Temperature:</Text>
                  <Text fontWeight="bold">
                    {currentPatient.vitalSigns?.temperature}
                  </Text>
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Medical History */}
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                Medical History
              </Heading>
              <VStack spacing={2} align="stretch">
                {currentPatient.medicalHistory?.map((item, index) => (
                  <Text key={index} fontSize="sm" color="gray.700">
                    • {item}
                  </Text>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Grid>

        {/* Treatment Notes */}
        <Card>
          <CardBody>
            <Heading size="md" mb={4}>
              Treatment Notes
            </Heading>
            <Text color="gray.700">{currentPatient.notes}</Text>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
};

export default CurrentPatientView;
