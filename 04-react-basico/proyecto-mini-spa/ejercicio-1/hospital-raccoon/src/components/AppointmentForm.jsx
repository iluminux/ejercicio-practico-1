import { useState } from 'react';

function AppointmentForm({ doctores }) {
  const [nombre, setNombre] = useState('');
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, doctor, fecha });
    alert(`Cita agendada para ${nombre} con ${doctor} el ${fecha}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>📅 Agenda tu Cita</h3>
      <input
        type="text"
        placeholder="Nombre del paciente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
        <option value="">Seleccionar doctor</option>
        {doctores.map((doc, i) => (
          <option key={i} value={doc.nombre}>{doc.nombre}</option>
        ))}
      </select>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <button type="submit">Agendar</button>
    </form>
  );
}

export default AppointmentForm;
