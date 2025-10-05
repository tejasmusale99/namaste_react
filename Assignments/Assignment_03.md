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

### 3. Role of 'type' attribute in script tags? What options can I use there?

- It is used to tell the browser what type of script is it.
- Types of scripts are:
  - Normal/ Classic script
  - Module Script
- We can assign three values to the type attribute:

  - type="" (empty string) or omit the attribute entirely used for a classic JavaScript script.
    The browser treats it as a normal script using classic JavaScript execution
  - type="module" used for a JavaScript module.
    This value causes the code to be treated as a module, enabling the use of import and export statements and running in strict mode by default.

### 4. {TitleComponent()} vs <TitleComponent/> vs <TitleComponent></TitleComponent>?

All three are methods to render the TitleComponent, functional component in some other component or React element.

- {TitleComponent()} : call the TitleComponent function since Fucntional components are at the end of the day JS functions
- <TitleComponent/> : Using self-closing tags
- <TitleComponent></TitleComponent> : Using opening and closing tags
