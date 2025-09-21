# Homework Questions

## Assignment 1

### 1. What is Emmet?

- Emmet is a plugin built into most code editors (like VS Code, Sublime, Atom).

- It helps you write HTML and CSS faster by using short abbreviations that expand into full code.

- **Example:** typing ! in an HTML file and pressing Tab/Enter generates a complete HTML boilerplate.

### 2. Difference between a Library and Framework?

- **Library** → You control the flow. You pick and call functions when needed.

  - **Example**: **React** (**Programmer** Decide decide how to use components).

- **Framework** → It controls the flow. You just fill in the parts; the framework decides when to call your code.

  - **Example**: **Angular** (**Framework** provides structure and calls your code at the right time).

### Analogy

**Library** = Ordering food → you choose what you want.

**Framework** = Going to a buffet → structure is already set, you follow it.

### 3. What is CDN? Why do we use it?

- CDN Stands for **Content Delivery Networks**
- It is a **netowrk of interconnected servers** thats speeds up webpage loading of data heavy application.
- Normally, when a user visits a website, the data has to travel from the website’s main server to the user’s computer. If the user is far away from that server, large files (like videos or images) take longer to load.
- With a CDN, the website’s content is stored on multiple servers located in different regions. The content is delivered from the server closest to the user, so it loads much faster.

### 4. Why is React known as React?

- It was designed to react quickly to changes in data.
- **React = Reacts to data changes and updates the UI efficiently.**

### 5. What is crossorigin in script tag?

- The crossorigin attribute in the script tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from a different origin (like a CDN).
- Normally, if we load a script from another domain (say https://unpkg.com/...), the browser may block detailed error reporting or refuse the request unless it’s properly marked as CORS-enabled.

**Values of crossorigin**

**1. crossorigin="anonymous" (default if you just write crossorigin)**

- No credentials (cookies, authorization headers) are sent.
- Used when we just want to load the script safely.

- **Example**

```html
<script crossorigin="anonymous" src="https://cdn.example.com/lib.js"></script>
```

**2. crossorigin="use-credentials"**

- Sends credentials (cookies, HTTP authentication) with the request.
- Only works if the server also allows it.

- **Example**

```html
<script
  crossorigin="use-credentials"
  src="https://cdn.example.com/lib.js"
></script>
```

### 6. What is diference between React and ReactDOM?

- **React**

  - The core library.
  - We create and manage components, state, props, hooks, and logic.
   - **Example:** 
   React.createElement(), useState(), useEffect().



- **ReactDOM**
  - A ReactDOM is the React library that connects React with the actual DOM in the browser.
  - Renders, React components into real HTML elements.
  - **Example:** 

  ```javascript
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
