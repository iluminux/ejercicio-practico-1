import { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';

function App() {
  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Carga simulada de datos
    setDoctores([
      { nombre: 'Dr. William Birkin', especialidad: 'Virología', experiencia: 15 },
      { nombre: 'Dra. Annette Birkin', especialidad: 'Genética', experiencia: 12 }
    ]);

    setServicios([
      'Inmunización contra el Virus-T',
      'Terapia genética avanzada',
      'Radiografía cerebral',
      'Tratamientos antizarigüeya'
    ]);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏥 Hospital Raccoon City</h1>

      <section>
        <h2>👩‍⚕️ Nuestro equipo médico</h2>
        {doctores.map((doc, i) => (
          <DoctorCard key={i} {...doc} />
        ))}
      </section>

      <section>
        <ServiceList servicios={servicios} />
      </section>

      <section>
        <AppointmentForm doctores={doctores} />
      </section>
    </div>
  );
}

export default App;
