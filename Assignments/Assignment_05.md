### Q1. Difference between Named Export , Default Export, \* as Export?

- Named Export means we need to import the thing with the same name as it has in the exporting file.

```html
export const LOGO_URL = "https://..........."; import {LOGO_URL} from "path";
```

- Default export means the thing that is getting exported by-default from the file. No need to use the same name in the importing file.

```html
export default LOGO_URL = "https://..........."; import LOGO_URL from "path";
```

- A file can have no more than one default export, but it can have as many named exports as you like.
- import \* from "path" means we want to import everything that is being exported from the exporting file!

### Q2. What is the importance of config.js file?

- A config.js file acts as the central hub for configuring different aspects of your application or project.
- it stores and manages essential settings like API keys, environment variables, theme preferences, and other configurations needed for your code to run properly.

### Q3. What are React Hooks?

- React hook is a normal JavaScript function which is provided by React which has some logic written behind it (superpowers).
- They are written in react that we import from npm
- Without them, we would have to write long JS code to achieve those superpowers
- Most used Hooks: useState(), useEffect()

### Q4. Why do we need a useState() hook?

- useState() hook gives us a powerful state variable
- State variable means a variable which maintains the state of the component
- SUPERPOWER: If the state gets changed/updated, it triggers the Reconciliation and leads to the re-render of the entire component.
  - **useState()** - E.g., const [list, setList] = useState([]); 
  - When we call a useState() hook/function, it gives us a state variable/returns a state variable inside an array. 
  - The second variable is used to modify the state variable.
  - Whenever a state variable changes/updates, React re-renders the component.

    - **Diff Algorithm**
   - Diff algorithm is used to find the difference between the updated virtual DOM and the previous virtual DOM.

