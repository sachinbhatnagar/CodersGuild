import React from "react";
import SideNav from "./SideNav";
import MainHeader from "./MainHeader";
import Section from "./Section";
import { Flex, MainWrapper } from "./Main.styled";

function Home({ selectedSong, setSelectedSong, setDiscography, discography }) {
  return (
    <Flex>
      <SideNav />
      <MainWrapper>
        <MainHeader />
        <Section
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          setDiscography={setDiscography}
          discography={discography}
        />
      </MainWrapper>
    </Flex>
  );
}

export default Home;
