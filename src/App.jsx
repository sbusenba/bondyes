import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Opposition from "./pages/Opposition";
import AboutMe from "./pages/AboutMe";
import Support from "./pages/Support";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/opposition",
      element: <Opposition />,
    },
    {
      path: "/about",
      element: <AboutMe />,
    },
  ]);
  return (
    <>
      <TopNav></TopNav>
      <h1 className="bondyes">
        Bond <span className="green">YES</span>!
      </h1>
      <div className="card">
        <p>Under construction, check back soon!</p>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
