### Q1. When and why do we need lazy()?

- We need lazy() method when we wish to not load everything into the browser in the beginning, but loading when required.
- It means we don't want to load all the components at the same time in the browser. Instead, we want that some component/feature should be loaded only on-demand ie when we actually visit it by clicking its link.
- Allows the developer break down an application into chunks (modules) per route and loads only the module(s) required for the route being visited. Its key principle being: "Load only what you need when you need it".
- This helps in splitting/chunking the code into 'logical bundles or chunks'. And this makes our app quite optimised since the bundle size of the app is reduced.

**Syntax**

``` js

import {lazy} from "react"; // We need to import 'lazy' from 'react' package
const Grocery = lazy(()=>{import("/src/components/Grocery")});

```

- The lazy() function takes a callback function as a parameter, which calls the dynamic import import().
- The import() takes the path of the component that we want to lazy load as a parameter.
- In simple term intial we dont load the file of Grocery suppose but when we visit and click on grocery page then only it loads it's file

### Q2. What is suspense?

**Problem during Lazy Loading:**
- So when we are lazy loading a particular feature, it gets loaded on-demand.(The code for that component was not loaded initially)
- When we click it, React immmediately tries to render it without waiting, but to load that component into the browser takes some time.
- During this time spam since the component was not present in the browser, React simply Suspended its Rendering as it could not wait for that much time to allow the bundle to load completely into the browser. This intermediate time caused an error.

**Solution given by Suspense:**
- To resolve this error, we need to provide something to be rendered in the mean-time when the actual component is being loaded. So we need to give some fallback page to be rendered by React for that fraction of time, instead of Suspending the render.
- This can be done by using <Suspense>. <Suspense> lets you display a fallback until its children have finished loading.
- Here, we wrapped Grocery component inside <Suspense>, and gave a fallback of "Loading..." string.

Eg -

```
<Suspense fallback = {Loading...}>
  <Grocery/>
</Suspense>
```

### Q3. Why did we get this error: "A component suspended while responding to synchronous input."? How does Suspense fix this?

- This error occurs because React suspended the rendering of the component since its code was not present in the browser at the time of rendering.
- React waited for none and immediately tried to render the component but could not find its code and therefore, could not render it.
- This is resolved by <Suspense> component given by react package.
- We can wrap the lazy loaded component into it and pass a fallback prop. This fallback prop will tell React what to render temporarily in the mean time when the lazy loaded component is being loaded.
- We pass any JSX code or any Shimmer component as a value in the fallback prop to be rendered as the fallback screen on the UI. This way Suspense helps resolve the error, and it shows the fallback screen on the UI for a few seconds.

### Q4. Advantages and disadvantages of using this code splitting pattern?

**Advantages:**
- Reduced Initial Load Time
- Improved Performance
- Optimized Bundle Size
- Better Resource Management

**Disadvantages:**
- Complexity
- Potential Overhead
- Increased Bundle Size
- Compatibility Issues

### Q5. What is Single Responsibility Principle?

- If we have a function, a class, or a single entity in our app, it
should have a single responsibility.
- For example, <Header> component in our app should have only one
responsibility i.e. to display the header on the application.
- If we have a component which is doing multiple things, then we
should divide that component into multiple components where
each one of them has a single responsibility.
- Breaking down the code into small modules -> Modularity

- Eg - In our apps, we should have each entity/ component concerned with its own single responsibility. Eg: <RestaurantCard/> componeont should be just concerned with rendering the JSX for the Restaurant card. It should not be concerned about fetching those restaurant details from an API.

### Q6. What is Modularity of Code and how does it help?

- Modularity means breaking our code into different small modules that are related to each other.
- Breaking the code into smaller pieces makes it more Reusable, Maintainable and more Testable.

***How more Reusable?***
- If we encounter any bug in a particular functionality of our Modular code, we have a localised bug i.e. we can easily figure out that the bug arises from which module. Now we can simply test that component/module and resolve the bug. Otherwise, we would have to find the bug in that one single big module of the app, which would be very difficult. Thus Modularity makes our code more Testable!

### Q7. What are Custom Hooks? How to identify their need?

- We know React Hooks are utility functions provided by React developers. They are simply JS functions exported by the React library, which we can reuse any number of times in our app.
- Similarly, we can write our own Custom Hooks in our code.

- **TO IDENTIFY THEIR NEED:**
  - To create a Custom Hook is not mandatory, but a good practice!
  - Whenever we find that a single component is dealing with more than 1 responsibility, we must think of bringing SRP into it by abstracting some "utility functionality" outside it.
  - Suppose one component <Body/> is responsible for fetching data from an API as well as rendering that data using JSX. We must think of keeping only 1 aim for this component.
  - So we can create a custom hook that actually fetches data from an API endpoint and returns that data.
  - Now all we need to do in the Body component is to call that Custom Hook with the endpoint and simply use the data it returns.
  -  The Body is no longer concerned about how the data is fetched from the API. That fetching logic is now abstracted out of the Body component.
- Thus Custom Hooks act as Utility functions that abstract out the extra responsibility from the component. And they can now be re-used anywhere in our app, any number of times.

### Q8. How to write a custom hook?
- Since Custom Hook is a utility function, we should think of placing it into the 'utils' folder.
- We should maintain separate file for separate hook and name the file exactly same as the hook's name.
- Custom Hook's name should always begin with 'use', for example, 'useFetch'. This is a good convention and tells React that it is not a simple JS function but a hook.
- Always begin with writing the Contract of the custom hook i.e. what it takes as input and what it returns as output.
- This is the Contract for useRestaurantMenu hook. It takes resId as input and returns corresponding resInfo as output.
- Eg: resId(I/P) ------> | useRestaurantMenu(Hook) | -----------------> resInfo(O/P)
- Once the contract is clear, we can write the actual logic inside the Custom hook.

```
const useRestaurantMenu = (resId) => {

  //fetching-data logic
  '
  '
  return resInfo;
}
export default useRestaurantMenu;
```

### Q9. What is meant by 'Linting'? 
- Linting is a process of running your code through a tool to analyse for potential errors. It throws an error if you don't follow the conventions set by the linter.
- ESLint is a popular JS linter that checks the JS code for best practices, with rules checking :
  - Keys in Iterators
  - Complete set of prop types
  - Naming Conventions
  - Imported something but not used it

  ### Q10. What is meant by 'Bundling the app'?

  - It means it takes all our files and bundles them together based on some logical separation.
  - We create muliple logical bundles or chunks in our app.
  - So, it is the splitting of code into various bundles or components which can then be loaded on-demand or in parallel.
  - Bundling/Chunking/ Code Splitting/ Dynamic Bundling/On-Demand Loading etc are all the same thing.
  - These help in optimising our apps when they become large-scale. In large-scale app, we divide the code into bundles and load these bundles of relatively small size.