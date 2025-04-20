import { useState } from 'react';
import { useDoctorContext } from '../context/DoctorContext';
import DoctorCard from '../components/DoctorCard';
import withHospitalStyle from '../components/withHospitalStyle';
import DoctorModal from '../components/DoctorModal';

const StyledDoctorCard = withHospitalStyle(DoctorCard);

function EquipoMedico() {
  const { doctores } = useDoctorContext();
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👩‍⚕️ Nuestro equipo médico</h2>

      {doctores.length === 0 ? (
        <p>Cargando doctores...</p>
      ) : (
        doctores.map((doc, index) => (
          <div key={index} onClick={() => setDoctorSeleccionado(doc)}>
            <StyledDoctorCard {...doc} />
          </div>
        ))
      )}

      <DoctorModal
        doctor={doctorSeleccionado}
        onClose={() => setDoctorSeleccionado(null)}
      />
    </div>
  );
}

export default EquipoMedico;
