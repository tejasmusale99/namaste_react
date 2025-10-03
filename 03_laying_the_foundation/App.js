import React from "react";
import ReactDOM from "react-dom/client";

// react element

const heading = React.createElement("h1", {}, "Tejas Musale");

// React.createElement => is nothing but (js object) => inside root.(render) converted into HTML Element 

//using jsx 

// JSX => converted into (React.createElement) with the help of babel =>
//  (React.createElement) is again JS object and inside root.(render) converted into HTML Element 

const heading2 = (<h1>Hello Tejas</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);
