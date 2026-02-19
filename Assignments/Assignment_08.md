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

### Q4 What is the use of <Outlet/> component?

- So if we want to push the children under the parent route based on the path, we need a component provided by 'react-router-dom' library called <Outlet/>.
- The Outlet just acts as a placeholder(or a tunnel) which later gets replaced by the children of the parent route based on the path.
- Eg: When we want to push children routes of AppLayout, such that
If path = "/" -> push <Body/> as a child of AppLayout. ---> So <Outlet/> will be replaced by <Body/>
If path = "/about" -> push <About/> as a child of AppLayout.---> So <Outlet/> will be replaced by <About/>
If path = "/contact" -> push <Contact/> as a child of AppLayout.---> So <Outlet/> will be replaced by <Contact/>

### Q5. Read about createHashRouter, createMemoryRouter from React Router docs.

***CreateHashRouter***

- CreateHashRouter is part of the React Router library and
provides routing capabilities for single-page applications.
- It’s commonly used for building client-side navigation with
applications.
- Unlike traditional server side routing, it uses the fragment
identifier (hash) in the URL to manage/handle routes on the
client side.
- This means that changes in the URL after the # symbol do
not trigger a full page reload, making it suitable for single
page applications.

***CreateMemoryRouter***

- CreateMemoryRouter is another routing component provided by
React router.
- Unlike CreateHashRouter or BrowserRouter,
CreateMemoryRouter is not associated with the browser’s URL.
- Instead it allows you to create an in-memory router for testing
other scenarios where you don’t want to interact with the actual
browser’s URL.

### Q6. What is the order of lifecycle method calls in Class-Based Components?

- During the execution of a class-based component, we have 5 Lifecycle methods executed in the following order:

``` constructor() -> render() -> componentDidMount() -> componentDidUpdate() -> compononentWillUnmount() ```

### Q7. What is the use of constructor()?

- **constructor():** It is the 1st lifecycle method to be executed as soon as a class component loads/renders/gets instantiated.
- Rendering a class component means a new instance of a class is created. Whenever this new instance is created, the constructor is called.
- The props passed to the class component are received by the constructor() as an argument.
- constructor() is the best place to specify the state for the class component. We can specify the initial state value here since constructor is the first thing to be called upon the loading of the class component.

### Q8. What is the use of the render() in class components?

- **render():** It is the 2nd lifecycle method and gets executed after constructor().
- It renders the class component. By rendering we don't mean actual mounting of the class component in the DOM!
- render() does not mount the component to the DOM. It just generates the component's Virtual DOM representation based on the current props and state.  

### Q8. Why do we use componentDidMount?

- **componentDidMount():** It is the 3rd lifecycle method to be executed in the Lifecycle of a class component.
- It executes after the render() method.
- It is the best place to make API calls/fetch calls because it is executed after the class component has been rendered to the DOM.
- Its very name "componentDidMount" suggests that component has been successfully completely mounted to the DOM.
- Now in React, we always want to render the skeleton component quickly without waiting for anything. Then once it is rendered, we quickly make an API call in the componentDidMount() which fetches the data and now updates the state with that data.
- As the state updation triggers re-render of the component, now the component re-renders with the actual data given by the API. This is how componentDidMount() is useful.

### Q9.Why do we use componentDidUpdate()?
- It is the 4th Lifecycle method that gets executed when the component gets actually updated in the DOM.
- If we need to do something after the something has changed/updated in the component, we can write that code in the componentDidUpdate().

```
componentDidUpdate(prevState, prevProps){
  if(this.state.count!== prevState.count){
      //do something if the count changes...
  }
}
```