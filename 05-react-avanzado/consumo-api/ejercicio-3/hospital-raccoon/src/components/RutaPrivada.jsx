import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
  const { usuario } = useContext(AuthContext);

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RutaPrivada;
