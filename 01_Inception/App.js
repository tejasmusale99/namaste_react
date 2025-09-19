//  Hello world using React
const reactHeading = React.createElement("h1", {}, "Hello from react");
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(reactHeading);
