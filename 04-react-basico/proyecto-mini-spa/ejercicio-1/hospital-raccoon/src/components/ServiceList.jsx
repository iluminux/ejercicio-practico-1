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
  
  export default ServiceList;
  