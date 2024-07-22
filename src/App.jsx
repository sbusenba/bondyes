import "./App.css";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <>
      <TopNav />
      <div className="body">
        <h1 className="bondyes">
          Bond <span className="green">YES</span>!
        </h1>
        <UnderConstruction />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
