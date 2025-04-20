import { createContext, useContext, useState, useEffect } from 'react';
import { obtenerDoctores } from '../api/fakeApi';

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    async function fetchDoctores() {
      const data = await obtenerDoctores();
      setDoctores(data);
    }
    fetchDoctores();
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
