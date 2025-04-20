import { useEffect, useState } from "react";
import axios from "axios";

function Doctores() {
  const [doctores, setDoctores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const obtenerDoctores = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setDoctores(response.data);
    } catch (err) {
      setError("No se pudo cargar la lista de doctores 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerDoctores();
  }, []);

  return (
    <div>
      <button onClick={obtenerDoctores} style={{ marginBottom: "1rem" }}>
        🔄 Recargar
      </button>

      {loading && <p>Cargando doctores...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={obtenerDoctores}>Reintentar</button>
        </div>
      )}

      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {doctores.map((doc) => (
            <li key={doc.id}>
              {doc.name} - {doc.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Doctores;

