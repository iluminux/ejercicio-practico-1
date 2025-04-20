import PropTypes from 'prop-types';

function DoctorCard({ nombre, especialidad, experiencia }) {
  return (
    <>
      <h3>{nombre}</h3>
      <p>🧪 Especialidad: {especialidad}</p>
      <p>🧬 Experiencia: {experiencia} años</p>
    </>
  );
}

DoctorCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  especialidad: PropTypes.string.isRequired,
  experiencia: PropTypes.number.isRequired
};

export default DoctorCard;

