## Planning of our Food Ordering App

**Low-Level Design: Components in the App**

- App
  - Header
    - Logo
    - Nav items
- Body
  - Search
  - Card Container
    - Restaurant Card
      - image
      - Name of Restaurant, Cusines, Rating, Dalivery time, Discount
- Footer
  - Copyright
  - Address
  - contact
  - Other Links

### Q1. Is JSX mandatory for React?

- No, JSX is not a requirement for using React.
- Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
- Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).
- So, anything you can do with JSX can also be done with just plain JavaScript!

### Q2. Is ES6 mandatory for React?

- Nope! You can technically build React apps without ES6, but highly recommended. Most libraries & resources assume it, and code becomes cleaner & more concise.

### Q3. How to add comments in JSX?

- You'll need to use JavaScript comments inside of JSX.
- You can use regular /_ Block Comments _/, but they need to be wrapped in curly braces: {/_ A JSX comment _/}

### Q4. React Fragment vs <></>

- Both <React.Fragment> and <> are ways to group children in React without adding an extra DOM element.
- They're helpful for avoiding unnecessary nesting and keeping JSX code clean.
- Think of them as invisible wrappers! <React.Fragment> is the explicit way, while <> is a shorthand introduced in React 16.6. Both achieve the same outcome.

### Q5. What is Virtual DOM?

- It is a representation of the actual DOM.
- It is in the form of a tree of React Elements, i.e tree of JS objects.
- Virtual Dom is used compute difference between Old VDOM and the New VDOM to update the actual DOM.

### Q6. What is Reconciliation in React?

- It is a process by which React finds the difference between the old VDOM and the new VDOM whenever there is some state update/change.
- The process in which **React computes which parts of the tree changed.**

### Q7. What is React Fiber?

- It is the latest core React Algorithm followed by react to do the Reconciliation process.
- It came with React 16
- New way of finding diff and updating the dom
- Its main feature is INCREMENTAL RENDERING(splitting the rendering work into chunks)

### Q8. Why we need keys in React? When do we need keys in React?

- Keys uniquely identify list items in React.
- Always give a key prop to each child in a list. Key should be unique and stable for every child.
- Keys help React identify which items in a list changed, added, or removed.
- We always need keys when rendering dynamic lists generated from loops, data arrays, or APIs. This ensures smooth updates and efficient DOM reconciliation.

### Q9. Can we use index as keys in React?

- Using index as a key is not recommended and should be avoided.
- We can use index, but only as a last option If nothing else is available.
- Mostly the data we get from backend itself has some unique id for each data element, which can be used as the key prop.

### Q10. What are props in React?

- At the end of day they are normal arguments passed to the React Functional components(which are JS functions at the end of day)
- To pass data dynamicaly to a component, we can pass data as props, instead of hard-coding data in that component!
- Using props, one component can be reused to show many items with different data.

### Q11. What is a Config Driven UI ?

- Every web app has a UI layer and a Data Layer.
- **It is a System-design concept in which the UI layer is driven by the Data Layer. Th UI is dependent upon data coming form backend**
- We get the Config i.e data from the backend and based on that we decide what and how to render the UI
- Example - No need to make totally different apps for different parts of the world! If sale in India, but not in America, then based on the config 'sale', we can render the sale component in India and not in America!
- in Simple word Controlling the UI using Data.