import React from "react";
import { Link } from "react-router-dom";
import { Li, Wrapper, Div } from "./SideNav.styled";

function NavButton({ src, path, destination }) {
  return (
    <Wrapper>
      <Div>
        <img className="nav-icon" src={src} />
      </Div>
      <Div>
        <Li>
          <Link to={path}>{destination}</Link>
        </Li>
      </Div>
    </Wrapper>
  );
}

export default NavButton;
