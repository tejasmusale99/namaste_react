
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


const AppLayout = () => {
    return(
        <div className="applayout">
            <Header />
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />) 