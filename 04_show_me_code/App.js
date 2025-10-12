
import ReactDOM from "react-dom/client" 


const Header = () => {
  return (
 <header className="header">
      <div className="logo-container">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhM_Aeej946r7uCMUzIPGUAn7jhflG2bO0nJZdE6tsME1ABwXaYTrZNp-xt0hbyPo6zs&usqp=CAU' alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#" className="cart">🛒 Cart</a>
      </nav>
    </header>
  )
}

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bf6a1af3-cf4c-4cda-af2a-865c0aee1834_71010.JPG' alt="The Spice Hub" />
        <span className="discount">20% OFF</span>
      </div>
      <div className="card-content">
        <h3 className="restaurant-name">The Spice Hub</h3>
        <p className="cuisine">Indian, Chinese</p>
        <div className="card-footer">
          <span className="rating">⭐ 4.5</span>
          <span className="delivery-time">30-40 mins</span>
          <span className="cost">₹500 for two</span>
        </div>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body-container">
          <div className="search-bar">
        <input type="text" placeholder="Search for restaurants or cuisines..." />
        <button>Search</button>
      </div>

      <div className="restaurants-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
    return(
        <div className="applayout">
            <Header />
            <Body />
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />) 