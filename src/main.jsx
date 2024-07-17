import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Opposition from "./pages/Opposition";
import AboutMe from "./pages/AboutMe";
import Support from "./pages/Support";
import App from "./App";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/" errorElement={<div>Whoops! Broken!</div>}>
      <Route element={<Home />} path="" />
      <Route element={<Opposition />} path="/opposition" />
      <Route element={<AboutMe />} path="/aboutme" />
      <Route element={<Support />} path="/support" />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
