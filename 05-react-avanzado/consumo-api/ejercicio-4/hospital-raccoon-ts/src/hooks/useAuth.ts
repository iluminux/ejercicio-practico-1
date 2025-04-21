// src/hooks/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Hook para acceder al AuthContext con validación de uso
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  return context;
};
