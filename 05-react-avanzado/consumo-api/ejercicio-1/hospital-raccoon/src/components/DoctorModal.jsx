import ReactDOM from 'react-dom';

function DoctorModal({ doctor, onClose }) {
  if (!doctor) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        <h3>{doctor.nombre}</h3>
        <p>🧪 {doctor.especialidad}</p>
        <p>🧬 {doctor.experiencia} años de experiencia</p>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Cerrar</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default DoctorModal;
