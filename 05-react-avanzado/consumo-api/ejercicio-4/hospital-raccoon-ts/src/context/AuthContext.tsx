// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode } from "react";

// 1. Tipo de datos del usuario
interface Usuario {
  nombre: string;
}

// 2. Tipo del contexto (lo que se expone)
interface AuthContextType {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
}

// 3. Valor inicial vacío
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Tipo para las props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 5. Implementación del provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (usuario: Usuario) => setUsuario(usuario);
  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
