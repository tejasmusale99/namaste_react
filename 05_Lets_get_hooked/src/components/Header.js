import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "url:/SwaadpointLogo.png";
import useOnlineOffline from "../utils/customHooks/useOnlineOffline";
import UserContext from "../utils/context/UserContext";
import { useSelector } from 'react-redux'

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const onlineStatus = useOnlineOffline();

  const {loggedInUser} = useContext(UserContext)

  // console.log(loggedInUser);
  
const cartItems = useSelector((store)=>store.cart.items)

console.log(cartItems)

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
          🛒 {}
        </Link>
        <Link to="/" className="cart">
          {onlineStatus ? "Online: 🟢" : "Offline: 🔴"}
        </Link>
        
      </nav>
      <div className="flex gap-5">
      <button
      className="cursor-pointer"
        onClick={() => {
          setIsLogIn(!isLogIn);
        }}
      >
        {isLogIn ? "Log In" : "Log Out"}
      </button>
      <div><Link to="/about">👤 {loggedInUser}</Link></div>
      </div>
    </header>
  );
};

export default Header;
