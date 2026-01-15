import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { lazy, Suspense } from "react";
import "./index.css";
import UserContext from "./utils/context/UserContext";

const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
      <div className="applayout">
        <UserContext.Provider value={{ loggedInUser: "Tejas Musale" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading....</h1>
              </>
            }
          >
            {" "}
            <Cart />
          </Suspense>
        ),
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
