import React from "react";
import ReactDOM from "react-dom/client";

// var hOneReact = React.createElement("h1", {}, "Hello World! Using React");

const NestedElement = function () {
  return <>
    <h1></h1>
    <h2>Using JSX</h2>
    <p>React is a JavaScript library for building user interfaces</p>
  </>
}


var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<NestedElement />);
