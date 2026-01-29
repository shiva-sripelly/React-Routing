import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="auth-bg">
  <div className="auth-card">
    <div className="auth-container">
      <h2>Signup</h2>

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

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>

      <button>Create Account</button>
      <button className="secondary-btn" onClick={resetForm}>
        Reset
      </button>

      <Link className="link" to="/login">Back to Login</Link><br/>
      <Link className="link" to="/">Home</Link>
    </div>
     </div>
</div>
  );
}

;
