import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-card">
        <h1>Welcome 🚀</h1>
        <p>
          A modern React Login & Signup application with smooth navigation and
          beautiful UI.
        </p>

        <div className="home-actions">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
        </div>
      </div>
    </div>
  );
};
