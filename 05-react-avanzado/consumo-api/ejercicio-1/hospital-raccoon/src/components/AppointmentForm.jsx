import PropTypes from 'prop-types';

function AppointmentForm({ doctores }) {
  // ...el resto del código sigue igual
}

AppointmentForm.propTypes = {
  doctores: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
      experiencia: PropTypes.number.isRequired
    })
  ).isRequired
};

export default AppointmentForm;
