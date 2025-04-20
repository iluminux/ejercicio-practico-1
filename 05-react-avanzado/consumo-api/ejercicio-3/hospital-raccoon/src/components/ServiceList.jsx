import PropTypes from 'prop-types';

function ServiceList({ servicios }) {
  return (
    <div>
      <h3>🛠️ Servicios Médicos</h3>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>
    </div>
  );
}

ServiceList.propTypes = {
  servicios: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ServiceList;

  