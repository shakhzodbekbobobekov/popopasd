import React from "react";

function Header() {
  return (
    <nav className="#2196f3 blue">
      <div className="nav-wrapper container ">
        <a href="#" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
