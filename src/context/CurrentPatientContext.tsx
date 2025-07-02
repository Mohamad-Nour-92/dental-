import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Patient } from "./CurrentPatientHelpers";

const defaultPatient: Patient = {
  id: 1,
  name: "أحمد العلي",
  age: 35,
  gender: "ذكر",
  phone: "+963 944 123 456",
  email: "ahmad.ali@email.com",
  address: "دمشق، سوريا",
  appointmentTime: "10:30 AM",
  appointmentDate: "15 ديسمبر 2024",
  treatment: "تنظيف وفحص الأسنان",
  status: "قيد العلاج",
  notes:
    "يعاني المريض من حساسية خفيفة في الضرس العلوي الأيمن. يُنصح بتنظيف لطيف.",
  vitalSigns: {
    bloodPressure: "120/80",
    heartRate: "72 bpm",
    temperature: "36.8°C",
  },
  medicalHistory: [
    "لا يوجد حساسية معروفة",
    "علاج عصب سابق (2022)",
    "مراجعات دورية للأسنان",
  ],
};

interface CurrentPatientContextType {
  currentPatient: Patient;
  setCurrentPatient: (patient: Patient) => void;
}

const CurrentPatientContext = createContext<
  CurrentPatientContextType | undefined
>(undefined);

export const CurrentPatientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentPatient, setCurrentPatient] = useState<Patient>(defaultPatient);
  return (
    <CurrentPatientContext.Provider
      value={{ currentPatient, setCurrentPatient }}
    >
      {children}
    </CurrentPatientContext.Provider>
  );
};

export { CurrentPatientContext };
