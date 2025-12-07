import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "url:/SwaadpointLogo.png";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="http://localhost:1234">
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/" className="cart">
          🛒 Cart
        </Link>
      </nav>
      <button
        onClick={() => {
          setIsLogIn(!isLogIn);
        }}
      >
        {isLogIn ? "Log In" : "Log Out"}
      </button>
    </header>
  );
};

export default Header;
