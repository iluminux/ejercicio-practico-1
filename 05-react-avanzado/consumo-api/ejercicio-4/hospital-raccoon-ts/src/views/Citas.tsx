// src/views/Citas.tsx
import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import ServiceList from "../components/ServiceList";
import { useDoctorContext } from "../context/DoctorContext";
import Dashboard from "./Dashboard";

// Tipado del doctor si no está definido ya en el contexto
interface Doctor {
  id?: number;
  nombre: string;
  especialidad: string;
  experiencia: number;
  [key: string]: any;
}

function Citas() {
  const { doctores } = useDoctorContext() as { doctores: Doctor[] };

  const servicios: string[] = [
    "Inmunización contra el Virus-T",
    "Terapia genética avanzada",
    "Radiografía cerebral",
    "Tratamientos antizarigüeya",
  ];

  return (
    <Dashboard>
      <h2>📋 Agenda tu Cita</h2>
      <AppointmentForm doctores={doctores} />
      <ServiceList servicios={servicios} />
    </Dashboard>
  );
}

export default Citas;
