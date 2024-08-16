import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import App from "./App";
import AllMusic from './AllMusic'
import Information from "./Information";
import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/information' element={<Information/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
); //THIS IS DONE DO NOT TOUCH IT
