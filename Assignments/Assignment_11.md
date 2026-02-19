### Q1. How to create an array from an object?

- When working with objects, you can use the Object.entries() function to create a new array from an object.
- It returns an array of the given object's own enumerable string-keyed property key-value pairs.
- Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.

```
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
```

### Q2. What is a Higher-Order Component?

- It is a function that takes an existing component as an argument and then enhances that component(adds some extra features to it), and then returns this enhanced component.
- Higher Order Components are Pure Functions. They never modify the component that they take in as input. They just add extra features on top of it/ enhance the basic component. | Enhanced Restaurant Component | = | Basic Component with dynamic Restaurant data + Label 'Offer' on top of Basic Component |

### Q3. What makes the Data Layer of our app?

- In our React App 2 Main Layers: Data Layer and UI Layer.
- The Data Layer consists of state, props, local variables and whatever data our app deals with.
- It powers the UI layer of our app.

### Q4. What makes the UI Layer of our app?

- The UI layer consists of JSX which eventually gets rendered onto the Browser DOM.
- It, in itself, is a Static layer, which is powered by the Data Layer.

### Q5. What is Lifting the State Up?

- Sometimes, we don't want to give the power of managing the state variable to the child component.
- Instead, we want to keep the state variable in the parent and pass its value as a prop from parent component to child component. This is Lifting the State Up, since the child component is not maintaining its own state, but is being controlled by its parent.
- Eg: We might want the state of multiple components to always change together i.e. be in sync (as in Accordion UI). To do this, we can remove the individual state variables from them and move/lift it to thier closest common parent component. Then to pass the state down to each child component, we use props. This is known as 'Lifting the State Up'.

### Q6. What are Controlled and Uncontrolled Components?

- **Controlled Component:**
  - If the state and behavior of a component is being managed
    by its parent component, then it is referred to as the
    controlled component.
- **UnControlled Component:**
  - If a component is managing its own state and controlling the
    behavior on its own then the component will be known as
    Uncontrolled component.
  - The parent component will have no power or control over
    this component and hence it will be known as an uncontrolled
    component.

### Q7. What is Props Drilling?

- Sometimes, we need to pass down data from one component to another through mutliple nested levels of components until we get to the component where the data is needed.
- This is a problem since we are unnecessarily passing props even to those components which never need them. This is not a good way of managing the Data Layer.
- This problem is called 'Props Drilling'.

### Q8. What are Context Provider and Context Consumer? (And useContext Hook)

**What is React Context?**

- React Context is a built-in feature that allows us to share data globally across components without prop drilling.
- We first create context using:

```
const UserContext = React.createContext(defaultValue);
```

- The defaultValue is used only when no Provider is wrapping the component.

**Context Provider:**

- <SomeContext.Provider /> is a component used to provide data to the component tree.
- When we create context, we give a default value.
  But in real applications, we want to pass dynamic or actual data.
- So we wrap our app (or part of it) with Provider.

```jsx
<UserContext.Provider value={{ name: "Tejas", loggedIn: true }}>
  <App />
</UserContext.Provider>
```

- Now, it Passes data through the value prop and Overrides default value and now data available to all nested components

**Context Consumer (Old Way)**

- <SomeContext.Consumer /> is used to read or subscribe to context data.

```jsx
<UserContext.Consumer>{(user) => <h1>{user.name}</h1>}</UserContext.Consumer>
```

- Subscribes to context
- Gets the latest value from Provider
- Re-renders when context value changes

**useContext Hook (Modern Way)**

- instead of using <Consumer />, we use the useContext hook.

```jsx
import { useContext } from "react";

function Header() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}
```

- Reads context value directly

- Subscribes to context updates

- Cleaner and simpler syntax

- Preferred in functional components
