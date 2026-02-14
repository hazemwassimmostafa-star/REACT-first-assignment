import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">عدسة</h2>
      <div className="menusect">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>الرئيسية</Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeMenu}>المدونة</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>من نحن</Link>
          </li>
        </ul>
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
       <img className="activelogo" src={logo} />
       <h></h>

       </div>
    </nav>
  );
}

export default Navbar;
