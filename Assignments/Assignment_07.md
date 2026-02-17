### Q1. What would happen if we do console.log(useState())?

- We would get an array of 2 elements in the console: [undefined, ƒ].
- The first element being the state variable which is undefined since we didn't give any default value for it while calling the useState() hook.
- The second one being the state-updating function f().

### Q2. How will useEffect() behave if we don't add a dependency array (No Dependency Array)?

- When the second parameter of useEffect() i.e. the dependency array is missing, it gets called upon after every component-render.

## Differnt Cases of useEffect

**No dependency Array**

- If the useEffect hook does not have a dependency array, then it will get executed on every render.

**Empty Dependency Array([ ])**

- If the dependency array is empty, the useEffect will be called
  only on initial render (just once when the component renders for the first time)

**Dependency Array having something [.,.,. ]**

```html
useEffect(() => { console.log("Effect runs"); }, [dep1, dep2]);
```

- useEffect gets called after initial render + After every re-render where any dependency value changes

### Q3. What is SPA?

- SPA stands for Single Page Application.
- It is such an application that has a single HTML page being rendered to the DOM.
- It has a single page being rendered, and all the new pages that we see are just "Components interchanging themselves".
- If we go on a new route, no new HTML page is loaded into the browser. We just change/refresh the components in the same single HTML page.
- In an SPA, the browser does not need to make external calls to fetch the different pages.
- SPAs are very fast and dynamically-loaded since no need to make network calls.

### Q4. What is difference between Client Side Routing and Server Side Routing?

**Client side routing**

- In client side routing, the app does not make any network calls while navigating from one page to another.
- Everything happens on the client side.
- Makes our app fast because there is no re-loading of the entire app. [React achieves Client-Side Routing using React-Router library]

**Server side routing**

- In the server side routing, when a user navigates to a path, the browser will reload, make a network call, get the page from the server, and then show it on the UI.
- Makes our app slow because behind the scenes, there are a lot of network calls being made and every time, the entire app gets reloaded.

- **This is the benefit of single page applications. We have all the components on the client side. They just get interchanged based on the routes.**

### Q5. What are the steps to create routes in a React app?

- Step1: We imported the createBrowserRouter from 'react-router-dom'
- Step2: We call createBrowserRouter(), it takes some configuration in it. This configuration is a list/array of objects Each object defines a different path and what to render on that path
- Step3: After creating the router configuration, we need to provide it to render the things as per the path So we import RouterProvider from react-router-dom package
- We do `root.render(<RouterProvider route = {ourRouteConfiguration}/>) instead of root.render() directly`

```html
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const appRouter = createBrowserRouter([
       {
              path:"/",
              element:<AppLayout/>,
              errorElement:<Error/>
       },
       {
              path:"/about",
              element:<About/>,
              errorElement:<Error/>
       }
]);
'
'
'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
```

### Q6. How to handle route errors in React app?

- Suppose we try to go on a wrong route, which has not been defined. Such a case must be handled gracefully.
- React-Router-DOM itself handles the error somewhat but not in a gracefull and fancy way.
- We are provided with the useRouteError() hook.
- It returns the error object from which we can access the various details of the error and then we can display some graceful UI page with the error details.


### Q7 What is the use case of the Link component?

- <Link></Link> component is a superpower given to us by 'react-router-dom'.
- When we wrap something in it, eg: <Link>About Us</Link>, if About Us is clicked, the page won't reload. Instead, the <About/> Component will be loaded in the DOM.
- It helps in avoiding full page reload and just refreshing the components that are required.
- is a wrapper over anchor tag. It tells the router-dom not to reload the entire page when that path is visited.
- If we see in the Elements tab, we won't see , we will see <a></a> tag. This proves that behind the scenes uses anchor tag.
- It makes our React App really fast and performant.