import React, { useState } from "react";
import {
  CardContainer,
  CardTextContainer,
  Title,
  Artist,
  Image,
} from "./Card.styled";
// index is the selected song ID
function Card({ src, title, artist, index, settingItem }) {
  const [flag, setFlag] = useState(false);
  const handleClick = (index) => {
    settingItem(index);

    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <CardContainer onClick={() => handleClick(index)} flag={flag}>
      <Image src={src} />
      <CardTextContainer>
        {/* <h3>{title}</h3> */}
        <Title index={index} ImAprop={"coolprop"}>
          {title}
        </Title>
        <Artist>{artist}</Artist>
      </CardTextContainer>
    </CardContainer>
  );
}

export default Card;
