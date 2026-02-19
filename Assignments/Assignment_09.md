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