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
