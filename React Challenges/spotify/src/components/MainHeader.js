import React from "react";
import { MainNav, MainButton, Flex, Div } from "./Main.styled";
import ImageWrapper from "./ImageWrapper";
function MainHeader() {
  return (
    <>
      <MainNav>
        <ImageWrapper
          width="50px"
          src="https://img.icons8.com/carbon-copy/100/000000/chevron-left.png"
        />

        <Flex>
          <Div>
            <MainButton>UPGRADE</MainButton>
          </Div>
          <Div>
            <MainButton>LLOYD</MainButton>
          </Div>
        </Flex>
      </MainNav>
    </>
  );
}

export default MainHeader;
