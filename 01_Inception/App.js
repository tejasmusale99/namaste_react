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

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       {},
//       "Nested element struture using react.createElement"
//     )
//   )
// );

// Nested Element with sibling

//   <div id="parent">
//   <div id="child1">
//     <h1>Hello from heading 1</h1>
//     <h1>Hello from heading 2</h1>
//   </div>
//   <div id="child2">
//     <h1>Hello from heading 3</h1>
//     <h1>Hello from heading 4</h1>
//   </div>
// </div>;

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child1" },[
    React.createElement('h1',{}, 'Hello from heading 1'),
    React.createElement('h1',{}, 'Hello from heading 2')
  ]),
    React.createElement("div", { id: "child2" },[
    React.createElement('h1',{}, 'Hello from heading 3'),
    React.createElement('h1',{}, 'Hello from heading 4')
  ])
  ]

);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(parent);
