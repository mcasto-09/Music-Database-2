import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Extra from "./Extra";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/extra' element={<Extra/>} />
      <Route path='/home' element={<Home/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
); //THIS IS DONE DO NOT TOUCH IT
