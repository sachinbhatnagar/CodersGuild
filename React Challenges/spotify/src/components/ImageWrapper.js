import React from "react";
import { Div, Image } from "./SideNav.styled";

function ImageWrapper({ width, src, alt }) {
  return (
    <Div>
      <Image width={width} src={src} alt={alt} />
    </Div>
  );
}

export default ImageWrapper;
