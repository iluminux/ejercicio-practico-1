// src/views/Login.tsx
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function Login() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nombre || !correo) {
      setError("Por favor completa ambos campos.");
      return;
    }

    login({ nombre });
    navigate("/home");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🏥 Hospital Raccoon City</h1>
      <p>Por favor inicia sesión para continuar:</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginBottom: "0.5rem", width: "100%" }}
        />
        <br />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{ marginBottom: "0.5rem", width: "100%" }}
        />
        <br />
        <button type="submit">Ingresar</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
}

export default Login;
