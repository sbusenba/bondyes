import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bondyes">
        Bond <span className="green">YES</span>!
      </h1>
      <div className="card">
        <p>Under construction, check back soon!</p>
      </div>
    </>
  );
}

export default App;
