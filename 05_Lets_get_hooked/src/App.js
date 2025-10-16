import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// console.log(logoImage)



const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
