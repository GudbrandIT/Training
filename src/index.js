// This file is the bridge between the component you created in the App.js file and the web browser

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const greeting = React.createElement("h1", null, "Hello World!");
// const text = React.createElement("p", null, "Welcome to my page!");

// root.render([greeting, text]);
