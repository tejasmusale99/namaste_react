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

- `{TitleComponent()}` : call the TitleComponent function since Fucntional components are at the end of the day JS functions
- `{<TitleCompoenent />}`: Using self-closing tags
- `<TitleComponent></TitleComponent>` : Using opening and closing tags

### 5. Can we have multiple root elements in React using multiple createRoot()?

- Yes we can have.
- In case our app is fully built using React, simply have a single root for the entire app.
- But in case our app/page is justy partially built with React, then we can have multiple createRoot(), and then use multiple root.render() methods to display different content in each root

### 6. Can we have nested fragments in React?

- Yes we can have nested fragments

### 7. What makes our web app code so readable in case of React? Is it just React itself?

- It’s not just because of React it’s JSX that makes our code easier to read and write!
Without JSX, we’d have to use the old createElement() method, which was quite complicated and messy.
