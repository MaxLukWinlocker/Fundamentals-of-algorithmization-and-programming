import React from "react";
//import ReactDOM from "react-dom";
//import createRoot from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//ReactDOM.render(
  //@ts-ignore
  const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  //document.getElementById("root")
);