import { createContext, useContext, useState, useEffect } from 'react';

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    setDoctores([
      { nombre: 'Dr. William Birkin', especialidad: 'Virología', experiencia: 15 },
      { nombre: 'Dra. Annette Birkin', especialidad: 'Genética', experiencia: 12 }
    ]);
  }, []);

  return (
    <DoctorContext.Provider value={{ doctores }}>
      {children}
    </DoctorContext.Provider>
  );
}

export function useDoctorContext() {
  return useContext(DoctorContext);
}
