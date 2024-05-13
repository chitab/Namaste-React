const heading = React.createElement(
  "div",
  { id: "grandParent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", { id: "heading" }, "React Hello World"),
      React.createElement("h5", { id: "heading" }, "React Hello World")]
    )
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
