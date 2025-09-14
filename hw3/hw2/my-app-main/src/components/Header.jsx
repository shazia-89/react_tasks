import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <h1 className="logo">My Website</h1>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
