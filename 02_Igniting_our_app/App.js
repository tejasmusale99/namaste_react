const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "heading3"),
    React.createElement("h1", {}, "heading4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)
