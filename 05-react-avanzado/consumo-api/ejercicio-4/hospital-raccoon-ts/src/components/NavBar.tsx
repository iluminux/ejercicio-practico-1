import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavBar: React.FC = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!usuario) return null;

  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>🏠 Home</Link>
        <Link to="/equipo" style={styles.link}>🧑‍⚕️ Equipo Médico</Link>
        <Link to="/citas" style={styles.link}>📅 Citas</Link>
        <Link to="/registro" style={styles.link}>📝 Registro</Link>
      </div>

      <div style={styles.user}>
        <span>👋 Hola, {usuario.nombre}</span>
        <button onClick={handleLogout} style={styles.button}>Salir</button>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #ddd",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  button: {
    backgroundColor: "#f87171",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default NavBar;

