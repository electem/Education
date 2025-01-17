import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LearningItems from "./components/LearningItems"; // Import your new component
import LoginPage from "./components/Login";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div style={styles.app}>
        {isAuthenticated && <Sidebar />} {/* Show sidebar only if logged in */}
        <div style={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={() => setIsAuthenticated(true)} />
              }
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
            />
            <Route
              path="/learning-items"
              element={isAuthenticated ? <LearningItems /> : <Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
    </Router>
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

