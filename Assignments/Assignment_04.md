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
- You can use regular /* Block Comments */, but they need to be wrapped in curly braces: {/* A JSX comment */}




     

