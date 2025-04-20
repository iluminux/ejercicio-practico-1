import { useDoctorContext } from './context/DoctorContext';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import withHospitalStyle from './components/withHospitalStyle';
import DoctorCard from './components/DoctorCard';
import DoctorModal from './components/DoctorModal';
import { useState } from 'react';

const StyledDoctorCard = withHospitalStyle(DoctorCard);

function App() {
  const { doctores } = useDoctorContext();
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  const servicios = [
    'Inmunización contra el Virus-T',
    'Terapia genética avanzada',
    'Radiografía cerebral',
    'Tratamientos antizarigüeya'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏥 Hospital Raccoon City</h1>

      <section>
        <h2>👩‍⚕️ Nuestro equipo médico</h2>
        {doctores.map((doc, i) => (
          <div key={i} onClick={() => setDoctorSeleccionado(doc)}>
            <StyledDoctorCard {...doc} />
          </div>
        ))}
      </section>

      <section>
        <ServiceList servicios={servicios} />
      </section>

      <section>
        <AppointmentForm doctores={doctores} />
      </section>

      <DoctorModal doctor={doctorSeleccionado} onClose={() => setDoctorSeleccionado(null)} />
    </div>
  );
}

export default App;

// React Profiler fue usado para identificar el rendimiento de los componentes.
// Se detectó que el componente DoctorModal solo se renderiza al hacer clic, lo que optimiza el flujo.
