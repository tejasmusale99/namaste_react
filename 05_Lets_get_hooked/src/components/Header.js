import { useState } from 'react';
import logoImage from 'url:/SwaadpointLogo.png';

const Header = () => {
   const [isLogIn, setIsLogIn] = useState(true);

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#" className="cart">
          🛒 Cart
        </a>
      </nav>
      <button onClick={()=>{setIsLogIn(!isLogIn)}}>{isLogIn?'Log In':'Log Out'}</button>
    </header>
  );
};

export default Header;