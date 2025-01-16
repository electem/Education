import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <Sidebar />
      <div style={styles.content}>
        
        <Dashboard/>
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    flexDirection: "row" as const,
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default App;
