import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RutaPrivada({ children }) {
  const { usuario } = useAuth();

  return usuario ? children : <Navigate to="/" />;
}

export default RutaPrivada;
