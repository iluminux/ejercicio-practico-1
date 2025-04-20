import Doctores from '../components/Doctores';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🏥 Bienvenida al Hospital Raccoon City</h1>
      <p>
        Este sistema te permite conocer al equipo médico, ver los servicios y agendar tus citas.
      </p>
      <img
        src="/vite.svg"
        alt="Hospital"
        style={{ width: '100px', marginTop: '2rem' }}
      />

      <div style={{ marginTop: '2rem' }}>
        <Doctores />
      </div>
    </div>
  );
}

export default Home;
