import { useEffect, useState } from "react";
import { useFormularioPaciente } from "../hooks/useFormularioPaciente";

function RegistroPaciente() {
  const [pacientes, setPacientes] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [apiError, setApiError] = useState(null);

  const { formulario, errores, handleChange, validar } = useFormularioPaciente();

  useEffect(() => {
    async function cargarPacientes() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Error al cargar pacientes");
        const data = await res.json();
        setPacientes(data.slice(0, 5));
      } catch (error) {
        setApiError(error.message);
      }
    }

    cargarPacientes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setPacientes([...pacientes, formulario]);
      setMensaje("✅ Paciente registrado con éxito");
    } else {
      setMensaje("");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2>📝 Registro de Paciente</h2>

      {apiError && <p style={{ color: "red" }}>⚠️ {apiError}</p>}

      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none", padding: 0 }}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formulario.nombre}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              name="edad"
              placeholder="Edad"
              value={formulario.edad}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errores.edad && <p style={{ color: "red" }}>{errores.edad}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={formulario.correo}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {errores.correo && <p style={{ color: "red" }}>{errores.correo}</p>}
          </div>
        </fieldset>

        <button type="submit">📋 Registrar</button>
      </form>

      {mensaje && <p style={{ color: "green", marginTop: "1rem" }}>{mensaje}</p>}

      <h3 style={{ marginTop: "2rem" }}>🧑‍⚕️ Pacientes cargados:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {pacientes.map((p, i) => (
          <li key={i}>
            {p.nombre || p.name} - {p.correo || p.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistroPaciente;
