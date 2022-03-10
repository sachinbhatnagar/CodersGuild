import React, { useState, useEffect } from "react";
import { FooterWrapper, Div, Image } from "./Footer.styled";

function Footer({ selectedSong }) {
  console.log(selectedSong);
  return (
    <FooterWrapper>
      <Div>
        <div>
          {selectedSong ? (
            <>
              <div>
                <p>{selectedSong.artist}</p>
                <img width="50px" src={selectedSong.src} alt="" />
              </div>
              <div>{selectedSong.title}</div>
            </>
          ) : (
            <p>loading</p>
          )}
          <Image
            className="footer-image"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt=""
          />
          <Image
            className="footer-image"
            src="https://cdn-icons-png.flaticon.com/512/54/54431.png"
            alt=""
          />
        </div>
      </Div>
      <div>play section</div>
      <div>buttons</div>
    </FooterWrapper>
  );
}

export default Footer;
