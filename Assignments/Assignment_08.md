### Q1.Why can't we have async callback function in useEffect()?
- Because an async function implicitly returns a promise.
- But the useEffect() hook expects its callback function to either return nothing or return a cleanup function.

```
useEffect(() => {
   async function fetchData() {
      const data = await fetch("api");
      console.log(data);
   }

   fetchData();
}, []);

```

### Q2. Why can we use async with componentDidMount?

- Because React does not use the return value of componentDidMount.
- But React does use the return value of useEffect.

### Q3. How do you create nested routes using react-router-dom configuration?

- Nested routes in React Router are created using the children property inside a route configuration object.
- When using createBrowserRouter(), we define a parent route and then specify its nested (child) routes inside the children array. The parent component must include an <Outlet /> component, which acts as a placeholder where the matched child route will be rendered.

```
    const appRoute = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children: [{  //the "/", "/about" and "/contact" routes are the children routes for the root route "/"
        path: "/",
        element: <Body/>,
        },
        {
        path: "/about",
        element: <About/>,
        },
        {
        path: "/contact",
        element: <Contact/>,
        }
      ]
    }]);
```

- / is the parent route.
- <AppLayout /> acts as the layout component.
- The children array defines nested routes inside the parent.
- path: "/" at children means its matches the parent so initally body render with header.
- "about" and "contact" are child routes rendered within the parent layout.

```
const AppLayout = () =>{
  return (<div className = "app">
            <Header/>
            <Outlet/> //this Outlet component will be replaced by the child of the AppLayout as per the path.
          </div>
        )
}
```

- <Outlet /> acts as a placeholder where the matched child route component is rendered dynamically based on the current URL.
- / → AppLayout + Body
- /about → AppLayout + About
- /contact → AppLayout + Contact

- The Header remains visible because it is part of the layout, and only the content inside <Outlet /> changes.

