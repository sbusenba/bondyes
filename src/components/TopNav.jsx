import "./TopNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function TopNav() {
  let [expanded, setExpanded] = useState(false);
  let update = (e) => {
    setExpanded(!expanded);
    console.log(e);
  };
  return (
    <nav>
      <ul>
        <li className={expanded ? "nav-item expanded" : "nav-item"}>
          <Link to="/" onClick={(e) => update(e)}>
            <button>
              <h2 id="bondyes">
                {"Bond "} <span className="green">YES!</span>
              </h2>
            </button>
          </Link>
        </li>

        <li className={expanded ? "nav-item expanded" : "nav-item"}>
          <Link to="/support" onClick={(e) => update(e)}>
            <button>Support</button>
          </Link>
        </li>
        <li className={expanded ? "nav-item expanded" : "nav-item"}>
          <Link to="/opposition" onClick={(e) => update(e)}>
            <button>Opposition</button>
          </Link>
        </li>

        <li className={expanded ? "nav-item expanded" : "nav-item"}>
          <Link to="/aboutme" onClick={(e) => update(e)}>
            <button onClick={(e) => update(e)}>About Me</button>
          </Link>
        </li>

        <li className="nav-expand-button">
          <button onClick={(e) => update(e)}>
            {expanded ? "Collapse" : "Menu"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
