//  Hello world using React
const reactHeading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from react"
);

// Nested Element Structure

{
  /* <div id="parent">
  <div id="child">
    <h1>Nested element struture using react.createElement</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      {},
      "Nested element struture using react.createElement"
    )
  )
);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(parent);
