import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import icon from '../assets/icon.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:5000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await response.json();
    // alert(data.message);
    onLogin();
    navigate('/Dashboard')
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <h1><img src={icon} alt="" height={30} width={30}/> LevelUp</h1>
        <p>Develop a passion for learning. <br /> If you do, you will never cease to grow.</p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <p>Don’t have an account? <a href="/signup">Sign up</a></p>
        <form onSubmit={handleSubmit}>
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
            <span className="show-password-icon"><VisibilityOutlinedIcon style={{color:'grey'}}/></span>
          </div>
          <button type="submit">Login</button>
          <p className="line"><span>&nbsp; or continue with &nbsp; </span></p>
          <div className="bottom-btn">
            <button>Google</button>
            <button>Apple</button>
          </div>
        </form>
        <p style={{cursor:'pointer'}}>Forgot Password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
