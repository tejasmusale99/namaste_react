import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// console.log(logoImage)
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { lazy, Suspense } from "react";
import "./index.css";  

const Cart = lazy(()=>import("./components/Cart"))


const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Suspense fallback={<><h1>Loading....</h1></>}> <Cart /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
