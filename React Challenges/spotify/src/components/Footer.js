import React, { useState, useEffect } from "react";
import { FooterWrapper, Div, Image } from "./Footer.styled";

function Footer({ selectedSong }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (selectedSong.album) {
      console.log("exists");
      console.log(selectedSong.album.cover);
      setImage(selectedSong.album.cover);
    } else {
      console.log("undefined");
    }
    console.log(image);
  }, [selectedSong]);
  return (
    <FooterWrapper>
      <Div>
        <div>
          <p></p>
          <img width="50px" src={image} alt="" />
        </div>
        <div>text</div>
        <div>
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
