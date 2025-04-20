// src/components/RutaPrivada.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
  const { usuario } = useContext(AuthContext); // Accede al usuario desde el contexto

  // Si no hay usuario, redirige al login
  if (!usuario) {
    console.warn("🔐 Acceso denegado. Redirigiendo al login...");
    return <Navigate to="/" replace />;
  }

  // Si hay usuario, permite el acceso al contenido protegido
  return children;
}

export default RutaPrivada;
