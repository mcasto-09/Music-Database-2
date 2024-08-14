import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//        <Route path='/songs' element={<All />} />
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
