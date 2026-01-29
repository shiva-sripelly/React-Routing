import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={`nav-item ${isAuthPage ? "white-btn" : ""}`}
      >
        Home
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        Signup
      </NavLink>

      <NavLink
        to="/about"
        className="nav-item"
      >
        About
      </NavLink>
    </nav>
  );
}
