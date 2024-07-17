import "./App.css";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <h1 className="bondyes">
        Bond <span className="green">YES</span>!
      </h1>
      <div className="card">
        <p>Under construction, check back soon!</p>
      </div>
      <Outlet />
    </>
  );
}

export default App;
