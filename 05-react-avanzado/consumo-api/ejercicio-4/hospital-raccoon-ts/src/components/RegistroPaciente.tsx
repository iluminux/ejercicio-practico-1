import React from "react";
import { useState } from "react";

interface Paciente {
  nombre: string;
  edad: number;
  correo: string;
}

const styles = {
  input: {
    border: "1px solid #ccc",
    marginTop: "0.3rem",
  } as React.CSSProperties,

  button: {
    padding: "0.75rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  } as React.CSSProperties,

  success: {
    color: "green",
    textAlign: "center",
    marginTop: "1rem",
  } as React.CSSProperties,
};

function RegistroPaciente() {
  const [paciente, setPaciente] = useState<Paciente>({
    nombre: "",
    edad: 0,
    correo: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      [name]: name === "edad" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Paciente registrado:", paciente);
    setMensaje("¡Paciente registrado exitosamente!");
    setPaciente({ nombre: "", edad: 0, correo: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={paciente.nombre}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div>
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={paciente.edad}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={paciente.correo}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        Registrar Paciente
      </button>

      {mensaje && <p style={styles.success}>{mensaje}</p>}
    </form>
  );
}

export default RegistroPaciente;
