import React from "react";
import ReactDOM from 'react-dom/client';
// import {createRoot} from 'react-dom/client'   React 19

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", {key:'h1-1'}, "heading1"),
    React.createElement("h1", {key:'h1-2'}, "heading2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {key:'h1-3'}, "heading3"),
    React.createElement("h1", {key:'h1-4'}, "heading4"),
  ]),
]);

// React 18 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
// React 19 

// const container = document.getElementById('root')

// const root = createRoot(container)
// root.render(parent)
