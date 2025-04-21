import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        {children}
      </main>
    </>
  );
};

export default Dashboard;
