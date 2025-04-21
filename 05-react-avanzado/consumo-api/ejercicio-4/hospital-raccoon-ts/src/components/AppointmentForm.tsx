import React, { useState, ChangeEvent, FormEvent } from "react";

// Definimos los tipos
interface Doctor {
  nombre: string;
  especialidad: string;
  experiencia: number;
}

interface AppointmentFormProps {
  doctores: Doctor[];
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctores }) => {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [doctorSeleccionado, setDoctorSeleccionado] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombrePaciente || !fecha || !doctorSeleccionado) {
      setMensaje("⚠️ Por favor completa todos los campos.");
      return;
    }

    console.log({ nombrePaciente, fecha, doctorSeleccionado });
    setMensaje("✅ Cita registrada exitosamente");
    setNombrePaciente("");
    setFecha("");
    setDoctorSeleccionado("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>📆 Registrar Cita</h3>

      <div>
        <label>Nombre del paciente:</label>
        <input
          type="text"
          value={nombrePaciente}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombrePaciente(e.target.value)}
        />
      </div>

      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFecha(e.target.value)}
        />
      </div>

      <div>
        <label>Doctor/a:</label>
        <select
          value={doctorSeleccionado}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setDoctorSeleccionado(e.target.value)}
        >
          <option value="">-- Selecciona un doctor --</option>
          {doctores.map((doc, idx) => (
            <option key={idx} value={doc.nombre}>
              {doc.nombre} - {doc.especialidad}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" style={{ marginTop: "1rem" }}>
        Registrar Cita
      </button>

      {mensaje && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          {mensaje}
        </p>
      )}
    </form>
  );
};

export default AppointmentForm;
