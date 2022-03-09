import React from "react";
import ImageWrapper from "./ImageWrapper";

import { SideNavContainer, Nav, UL, LogoWrapper } from "./SideNav.styled";
import NavButton from "./NavButton";

function SideNav() {
  return (
    <SideNavContainer>
      <LogoWrapper>
        <ImageWrapper
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          width="130px"
          alt="logo"
          path="/home"
        />
      </LogoWrapper>

      <Nav>
        <UL>
          <NavButton
            destination="Home"
            path="/home"
            src="https://img.icons8.com/dotty/80/000000/home.png"
          />
          <NavButton
            destination="Search"
            path="/search"
            src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
          />
          <NavButton
            destination="Your Library"
            path="/library"
            src="https://img.icons8.com/ios-filled/50/000000/books.png"
          />
        </UL>
      </Nav>

      <hr />
      <Nav>
        <UL>
          <NavButton
            destination="Create Playlist"
            path="/home"
            src="https://img.icons8.com/ios-filled/50/000000/add--v2.png"
          />

          <NavButton
            destination="Liked Songs"
            path="/search"
            src="https://img.icons8.com/glyph-neue/64/000000/filled-like.png"
          />
        </UL>
      </Nav>
    </SideNavContainer>
  );
}

export default SideNav;
