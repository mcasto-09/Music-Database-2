import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import App from "./App";
import musicRouter  from "server/routes/music.routes.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route path='/all' element={<musicRouter />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
