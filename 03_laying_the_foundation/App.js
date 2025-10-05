import React from "react";
import ReactDOM from "react-dom/client";

// react element

const heading = React.createElement("h1", {}, "Tejas Musale");

// React.createElement => is nothing but (js object) => inside root.(render) converted into HTML Element

//react element using jsx

// JSX => converted into (React.createElement) with the help of babel =>
//  (React.createElement) is again JS object and inside root.(render) converted into HTML Element

const heading2 = <h1>Hello Tejas</h1>;

// function component with arrow function

const Heading3 = () => {
  return <h1>arrow functional component</h1>;
};

// functional component with normal function

function Heading4() {
  return (
    <>
      <h1>normal function component</h1>
      <Heading3 /> {/*component composition when we write component inside another component*/}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading4 />);
