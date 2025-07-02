import { useContext } from "react";
import { CurrentPatientContext } from "./CurrentPatientContext";

export type Patient = {
  id: number;
  name: string;
  age?: number;
  gender?: string;
  phone?: string;
  email?: string;
  address?: string;
  appointmentTime?: string;
  appointmentDate?: string;
  treatment?: string;
  status?: string;
  notes?: string;
  vitalSigns?: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
  };
  medicalHistory?: string[];
};

export function useCurrentPatient() {
  const context = useContext(CurrentPatientContext);
  if (!context)
    throw new Error(
      "useCurrentPatient must be used within a CurrentPatientProvider"
    );
  return context;
} 