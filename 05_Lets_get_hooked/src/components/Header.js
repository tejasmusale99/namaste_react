import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "url:/SwaadpointLogo.png";
import useOnlineOffline from "../utils/customHooks/useOnlineOffline";

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const onlineStatus = useOnlineOffline()


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
        <Link to="/cart" className="cart">
          🛒 Cart
        </Link>
        <Link to="/" className="cart">
           {onlineStatus?"Online: 🟢":"Offline: 🔴"}
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
