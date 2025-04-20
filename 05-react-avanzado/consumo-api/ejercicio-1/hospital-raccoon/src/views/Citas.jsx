import AppointmentForm from '../components/AppointmentForm';
import ServiceList from '../components/ServiceList';
import { useDoctorContext } from '../context/DoctorContext';

function Citas() {
  const { doctores } = useDoctorContext();

  const servicios = [
    'Inmunización contra el Virus-T',
    'Terapia genética avanzada',
    'Radiografía cerebral',
    'Tratamientos antizarigüeya'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Agenda tu Cita</h2>
      <AppointmentForm doctores={doctores} />
      <ServiceList servicios={servicios} />
    </div>
  );
}

export default Citas;
