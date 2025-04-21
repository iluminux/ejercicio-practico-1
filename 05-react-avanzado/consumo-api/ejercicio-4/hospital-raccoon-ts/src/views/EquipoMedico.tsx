import React from "react";
import { useState } from "react";
import { useDoctorContext } from "../context/DoctorContext";
import DoctorCard from "../components/DoctorCard";
import withHospitalStyle from "../components/withHospitalStyle";
import DoctorModal from "../components/DoctorModal";
import Dashboard from "./Dashboard";

// Tipamos un doctor base según JSONPlaceholder o tus datos
interface Doctor {
  id?: number;
  nombre: string;
  especialidad: string;
  experiencia: number;
  [key: string]: any; // para campos adicionales
}

const StyledDoctorCard = withHospitalStyle(DoctorCard);

function EquipoMedico() {
  const { doctores } = useDoctorContext() as { doctores: Doctor[] };
  const [doctorSeleccionado, setDoctorSeleccionado] = useState<Doctor | null>(null);

  return (
    <Dashboard>
      <h2>👩‍⚕️ Nuestro equipo médico</h2>

      {doctores.length === 0 ? (
        <p>Cargando doctores...</p>
      ) : (
        doctores.map((doc, index) => (
          <div key={index} onClick={() => setDoctorSeleccionado(doc)}>
            <StyledDoctorCard {...doc} />
          </div>
        ))
      )}

      <DoctorModal
        doctor={doctorSeleccionado}
        onClose={() => setDoctorSeleccionado(null)}
      />
    </Dashboard>
  );
}

export default EquipoMedico;
