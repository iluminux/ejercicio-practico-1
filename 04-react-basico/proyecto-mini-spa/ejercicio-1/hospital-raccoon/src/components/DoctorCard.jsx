function DoctorCard({ nombre, especialidad, experiencia }) {
    return (
      <div className="doctor-card">
        <h3>{nombre}</h3>
        <p>🧪 Especialidad: {especialidad}</p>
        <p>🧬 Experiencia: {experiencia} años</p>
      </div>
    );
  }
  
  export default DoctorCard;
  