import logoImage from 'url:/SwaadpointLogo.png';

const Header = () => {
  
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
    </header>
  );
};

export default Header;