import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import RutaPrivada from "./components/RutaPrivada.jsx";
import RegistroPaciente from "./components/RegistroPaciente.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública - Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta protegida - Página principal */}
        <Route 
          path="/home"
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          }
        />

        {/* Ruta protegida - Registro de pacientes */}
        <Route 
          path="/registro"
          element={
            <RutaPrivada>
              <RegistroPaciente />
            </RutaPrivada>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
