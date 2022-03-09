import "./App.css";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import MainHeader from "./components/MainHeader";
import Section from "./components/Section";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex, MainWrapper } from "./components/Main.styled";

function App() {
  const [discography, setDiscography] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});

  //App is your Big parent (gran gran gran gran gran gran old father)
  //create a common state that will update when the user clicks and pass the information between siblings components
  // SEction > Card (card hold the information of each music)
  // you need to display the card information on the footer

  // but footer and section are siblings!! Oh noes!, how to solve that?
  return (
    <>
      <Router>
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
        <Routes>{/* <Route path="/" exact element={Home} /> */}</Routes>
        <Footer selectedSong={selectedSong} />
      </Router>
    </>
  );
}

export default App;
