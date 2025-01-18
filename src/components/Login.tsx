import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Manage login/signup visibility
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate("/Dashboard");
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement signup logic
    alert("Signup successful!");
    setIsLogin(true); // Redirect to login after successful signup
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <h1>
          <img src={icon} alt="" height={30} width={30} /> LevelUp
        </h1>
        <p>
          Develop a passion for learning. <br /> If you do, you will never cease to grow.
        </p>
      </div>
      <div className="login-form">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)} // Show signup section
                style={{ color: "green", cursor: "pointer" , textDecoration:'underline'}}
              >
                Sign up
              </span>
            </p>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="password-container">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="show-password-icon">
                  <VisibilityOutlinedIcon style={{ color: "grey" }} />
                </span>
              </div>
              <button type="submit">Login</button>
              <p className="line">
                <span>&nbsp; or continue with &nbsp; </span>
              </p>
              <div className="bottom-btn">
                <button>Google</button>
                <button>Apple</button>
              </div>
            </form>
            <p style={{ cursor: "pointer" }}>Forgot Password?</p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)} // Show login section
                style={{ color: "green", cursor: "pointer" , textDecoration:'underline'}}
              >
                Sign in
              </span>
            </p>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                onChange={(e) => console.log(e.target.value)} // Handle full name input
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="password-container">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="show-password-icon">
                  <VisibilityOutlinedIcon style={{ color: "grey" }} />
                </span>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
