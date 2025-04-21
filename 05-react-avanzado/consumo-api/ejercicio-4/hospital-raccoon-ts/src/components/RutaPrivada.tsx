import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RutaPrivadaProps {
  children: ReactNode;
}

const RutaPrivada: React.FC<RutaPrivadaProps> = ({ children }) => {
  const { usuario } = useAuth();

  if (!usuario) return <Navigate to="/" />;

  return <>{children}</>;
};

export default RutaPrivada;
