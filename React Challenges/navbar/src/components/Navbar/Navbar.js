import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">React</h1>
      <img
        className="react-logo"
        src="https://img.icons8.com/dotty/80/000000/react.png"
      />

      <div className="menu-icon" onClick={handleClick}>
        <img
          width="30px"
          src={
            clicked
              ? "https://img.icons8.com/ios-glyphs/30/000000/menu--v2.png"
              : "https://img.icons8.com/ios-filled/50/000000/xbox-x.png"
          }
        />
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
}

export default Navbar;
