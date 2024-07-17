import "./TopNav.css";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/support">Voice Your Support</Link>
        </li>
        <li>
          <Link to="/opposition">The Opposition</Link>
        </li>
        <li>
          <Link to="/aboutme">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
