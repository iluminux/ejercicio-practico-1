import React from "react";
import { useNavigate } from "react-router-dom";
import Doctores from "../components/Doctores";
import Dashboard from "./Dashboard";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const irARegistro = () => {
    navigate("/registro");
  };

  return (
    <Dashboard>
      <h1>🏥 Bienvenida al Hospital Raccoon City</h1>
      {usuario && <h2>Hola, {usuario.nombre} 👋</h2>}

      <p>
        Este sistema te permite conocer al equipo médico, ver los servicios y agendar tus citas.
      </p>

      <h2 style={{ marginTop: "2rem" }}>👨‍⚕️ Lista de Doctores</h2>
      <Doctores />

      <div style={{ marginTop: "2rem" }}>
        <button onClick={irARegistro}>📋 Registrar Paciente</button>
      </div>

      <button onClick={handleLogout} style={{ marginTop: "2rem" }}>
        🔒 Cerrar Sesión
      </button>
    </Dashboard>
  );
}

export default Home;
