import React from "react";
import SideNav from "./components/SideNav";
import MainHeader from "./components/MainHeader";
import Section from "./components/Section";
import { Flex, MainWrapper } from "./components/Main.styled";

function Home() {
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
