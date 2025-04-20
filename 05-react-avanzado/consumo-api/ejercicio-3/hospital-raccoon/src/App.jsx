import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import RutaPrivada from "./components/RutaPrivada.jsx"; // Asegúrate que este sea el nombre correcto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
