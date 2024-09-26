import "./App.css";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <>
      <TopNav />
      <div className="content">
        <UnderConstruction />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
