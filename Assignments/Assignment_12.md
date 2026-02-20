### Q1 Redux in detail?

- **Note - Redux is not mandatory to use in our application.**
- When we build large-scale applications where we have to manage the
  state of a lot of components and the application has a number of
  features, then using Redux in our application makes sense.
- In small-scale or mid-scale applications, we can still manage the state
  without using Redux.
- Redux and React both are not the same thing. Redux is not part of
  React. They both are different libraries.
- Just like we have React Dev Tools, we also have Redux Dev Tools which
  help us to debug our application when we use Redux.

**There are 2 libraries that Redux team offers:**

- react-redux: This is like a bridge between React and Redux.
- Redux toolkit: This is a newer way of writing redux. This package is intended to be the standard way of writing Redux logic.

- Redux Store is like a very big JavaScript object, which has a lot of
  data in it, stored in a global central space.

### Q2. useContext vs Redux.

**useContext:**

- React hook for consuming context provided higher up in the component tree.
- Best for managing local state within a small portion of the application.
- Simpler and lightweight, built into React.
- Integration is easy and doesn't require additional libraries.
- May cause performance issues with deeply nested component trees.

**Redux:**

- State management library for managing global state in large-scale applications.
- Suitable for managing application-wide state or state shared across multiple components.
- Provides predictable state container with centralized store for easier debugging.
- Allows middleware for handling complex state logic and side effects.
- Comes with a rich ecosystem of tools and middleware enhancing development experience.

### Q3. Explain Slice.

- Since the Redux store contains a lot of data, we do not want it to
  become very big, so we make use of Slices offered by Redux.
- We can assume slice as a small portion of Redux store. We can
  create multiple slices in our store.
- To keep data separate, we create logical partitions in our store. These
  partitions are known as Slices.
- If we want to keep the data related to the cart, then we will create a
  separate slice for the cart. If we want to keep the data related to the
  logged in user, then we will create a separate slice for that as well.

### Q4. Dispatcher

- Dispatcher in Redux is responsible for dispatching actions to reducers. When an action is dispatched, the dispatcher forwards it to all registered reducers.
- Redux says that we cannot directly modify the data in the slice. Redux
  offers a way to do that.
- Assume that we have a cartSlice which keeps track of the data in the
  cart. We have an Add to cart button which adds the item into the cart.
  By clicking on this button, we cannot directly modify our cartSlice.
- To modify the cartSlice, when the user clicks on the Add To Cart
  button, we have to dispatch an action.
- When we dispatch an action, it calls a function and then this function
  modifies the cart.

  **Here is the flow:**

`User clicks the button —> Dispatch an action —> Action calls a
function —> Function modifies the cart slice`

### Q5. Explain Reducer.

- Reducer in Redux is a pure function responsible for updating the application state based on dispatched actions.
- It takes the current state and an action as input, processes the action to determine the state changes, and returns a new state object.
- Reducers must be pure functions with no side effects, ensuring predictable behavior.
- Multiple reducers can be combined using combineReducers to manage different parts of the application state.

### Q6. Explain Selector.

- In Redux, a selector is a function used to extract specific data from the Redux store state.
- It computes derived data, filters, or formats data before it's used in components.
- Selectors take the current state as input, apply logic to extract desired data, and may use memoization for performance optimization.
- They're utilized in components to access and subscribe to selected data, ensuring components re-render when selected data changes.

eg:

```js
const cartItems = useSelector((store) => store.cart.items);
```

### Install Redux

- **npm install @reduxjs/toolkit**
- **npm install react-redux**

- **Create/Configure the store**

```jsx
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
```

- **Providing the store to the application**

```jsx
import { Provider } from "react-redux";
import appStore from "./appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
};
export default App;
```

- Configuring the store is Redux’s job. That’s why we imported
  configureStore from @reduxjs/toolkit.
- Providing this store to the application is the job of react-redux.
  That’s why we imported Provider from react-redux.
- We then use this <Provider></Provider> as a wrapper to wrap our
  application inside it.
- Provider takes a property store to which we can assign our
  configured store.

- **Create a slice**

```JSX
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "cart",
initialState: {
items: [],
},
reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

```

- createSlice() returns an object which has following properties:
  - Name
  - Initial state
  - Reducers
- The initialState is the state which a slice has in the beginning
  before it gets modified.
- Reducers have actions and these actions have callback functions.
- addItem is a reducer function which is called as an action.
- The function which is assigned to it is responsible for modifying
  or updating the cartSlice.
- We have exported the reducer as a default export.
- We have also exported the actions from the slice.
- The payload of the action will contain a new item in this case
  which will be pushed to the items array in the state.

**Add the slice to the store**

```JSX
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./utils/cartSlice";

const appStore = configureStore({
reducer: {
cart: cartReducer,
},
});

export default appStore;
```

- The reducer key is assigned with an object which will have all the
  slices (cartSlice in this case).
- The reducer contains the slices where each of the slices contains
  its own reducer functions.

**Subscribing to the store**

- We can subscribe to the store using a selector to read the data
  of the store.
- Redux offers a hook named useSelector which can be used to
  subscribe to the store.

```JSX
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
const cartItems = useSelector((store) => store.cart.items);

return(
<div>
<h1>{cartItems.length}</h1>
</div>
);

};

export default Cart;
```

- This useSelector gives us access to the store where we can find
  the cart.items.
- The items of the cart will be stored in cartItems which we can
  use in our component.
- Note - Make sure to access a particular state variable. In our
  case, we have accessed cart.items which gives us the exact value
  of items.
- If we subscribe only to store.cart, sometimes this store.cart may
  contain state variables other than items.
- If there is a change in any of those state variables, then it will
  re-render the cart component as well.
- So subscribing only to store.cart.items will make the Cart
  component re-render only when there is a change in the items.

**Dispatch an action**

```JSX
import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "./utils/cartSlice";

const Body = () => {
const dispatch = useDispatch();

const handleAddItem = () => {
dispatch(addItem("apple"));

};

return (
<div>
<button onClick={handleAddItem}>Add Item</button>
</div>

);

};

export default Body;
```

- React-redux offers a hook to dispatch an action i.e. useDispatch.
  This hook returns a function i.e. dispatch()
- The dispatch() function takes an argument i.e. addItem action.
- The addItem action has a reducer function which takes one
  argument i.e. payload (apple).
- When an action is dispatched, an object is created. This object
  has a key i.e. payload and it will have the value which is passed to
  the reducer function i.e. apple.
- {
  Payload: “apple”,
  }
- The handleAddItem will be responsible for dispatching the action
  and it is assigned to the click event of the button. So whenever
  the user clicks the button, the addItem action will be dispatched
  and it will add that item to the cart.
- ` onClick={handleAddItem} vs onClick={() => handleAddItem(item)} vs
onClick={handleAddItem(item)}`

**1. onClick={handleAddItem}**

- This syntax assigns the handleAddItem function directly to
  the onClick event.
- When the button is clicked, the handleAddItem function will
  be called without any arguments.

**2. onClick={() => handleAddItem(item)}**

- This syntax uses an arrow function to call handleAddItem
  with the item argument.
- This is useful when you need to pass specific arguments to
  the handleAddItem function when the button is clicked.
- Here, the item needs to be defined or in scope when the
  button is rendered.
- If item is a variable available in the component’s context, it
  will be passed to handleAddItem when the button is clicked.

**3. onClick={handleAddItem(item)}**

- This syntax is incorrect and will not work as expected.
- Here, handleAddItem(item) is immediately invoked when the
  component renders, rather than being set as a callback to
  be invoked on the click event.
- The return value of handleAddItem(item) (which is typically
  undefined unless the function returns another function) will
  be assigned to onClick.
- To properly call handleAddItem with an argument when the
  button is clicked, you should wrap it in an anonymous
  function, like in the second example.

In older redux (vanilla redux), it was not allowed to mutate the state.
We used to create a copy of our state and then modify that. We also
had to return the new state.
This whole process is still done by Redux behind the scenes but now it
is not asking developers to do it. Redux is using the immer library to do
it.
In the new redux, we have to mutate the state. And it is not mandatory
to return the state as well.
