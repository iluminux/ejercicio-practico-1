export async function obtenerDoctores() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            nombre: 'Dr. William Birkin',
            especialidad: 'Virología',
            experiencia: 15
          },
          {
            nombre: 'Dra. Annette Birkin',
            especialidad: 'Genética',
            experiencia: 12
          }
        ]);
      }, 1000); // Simula demora de red
    });
  }
  