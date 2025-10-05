## Assignment 3

### 1. What is JSX?

- It is just an HTML-like/ XML-like syntax but not the same as them.
- React developers came up with this syntax as the React.createElement() was very complicated in case of generating nested DOM structure.
- JSX is converted into React.createElement() syntax by Babel, a package that comes as a dependency of Parcel.
- JSX => (help of Babel) React.createElement() => Js object => root.render() => converts to HTML Element.

### 2. Super Powers of JSX?

- Enables us to write easy, readable and manageable code
- We can write any JS expression/logic in the JSX by using {}. So simply wrap the JS code in {} to execute it and render it dynamically.
- JSX protects against DOM XSS(Cross-Site Scripting) attacks by doing AUTO-ESCAPING and sanitizing the data coming in {}.
