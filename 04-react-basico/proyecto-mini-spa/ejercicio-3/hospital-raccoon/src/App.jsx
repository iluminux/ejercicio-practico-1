import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import EquipoMedico from './views/EquipoMedico';
import Citas from './views/Citas';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
        <Link to="/equipo" style={{ marginRight: '1rem' }}>👩‍⚕️ Equipo Médico</Link>
        <Link to="/citas">📅 Citas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<EquipoMedico />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </div>
  );
}

export default App;
