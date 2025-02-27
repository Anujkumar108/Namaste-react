const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div",{ id: "child" },
    React.createElement("h1", {}, "Inception"),
  )
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// {} is a place where you give attributes to a tag
