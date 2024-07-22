import "./App.css";
import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <TopNav />
      <div className="body">
        <h1 className="bondyes">
          Bond <span className="green">YES</span>!
        </h1>
        <div className="card">
          <p>Under construction, check back soon!</p>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
