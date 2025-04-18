import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
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

      {localStorage.getItem("token") ? (
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
        🛒 Total: ${getTotalPrice().toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
