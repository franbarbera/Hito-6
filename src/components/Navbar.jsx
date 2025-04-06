import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const [total, setTotal] = useState(25000);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false);
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        🍕 Home
      </Link>

      {token ? (
        <>
          <Link to="/profile" className="navbar-link">
            🔓 Profile
          </Link>
          <button onClick={handleLogout} className="navbar-button">
            🔒 Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar-link">
            🔐 Login
          </Link>
          <Link to="/register" className="navbar-link">
            🔐 Register
          </Link>
        </>
      )}

      <button onClick={handleCartClick} className="navbar-button">
        🛒 Total: ${total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
