import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved username
  useEffect(() => {
    const savedUser = localStorage.getItem("rememberUser");
    if (savedUser) {
      setUsername(savedUser);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = () => {
    if (rememberMe) {
      localStorage.setItem("rememberUser", username);
    } else {
      localStorage.removeItem("rememberUser");
    }
    alert("Login clicked (logic can be added later)");
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
    setRememberMe(false);
    localStorage.removeItem("rememberUser");
  };

  return (
    <div className="auth-bg">
  <div className="auth-card">
    <div className="auth-container">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>

      <div className="remember-box">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label>Remember Me</label>
      </div>

      <button onClick={handleLogin}>Login</button>
      <button className="secondary-btn" onClick={clearForm}>
        Clear
      </button>
      
      <Link className="link" to="/signup">Signup</Link><br/>
      <Link className="link" to="/">Home</Link>
     
    </div>
    </div>
</div>
  );
};
