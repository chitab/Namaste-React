import React from "react";
import  ReactDOM from "react-dom/client";
const heading = React.createElement('h1', {id:'heading'}, "Namaste React");
const jsHeading = <h1 id="heading">Namaste React Using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsHeading);