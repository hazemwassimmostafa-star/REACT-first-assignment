import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Adasa</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
