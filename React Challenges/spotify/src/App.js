import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  //App is your Big parent (gran gran gran gran gran gran old father)
  //create a common state that will update when the user clicks and pass the information between siblings components
  // SEction > Card (card hold the information of each music)
  // you need to display the card information on the footer

  // but footer and section are siblings!! Oh noes!, how to solve that?
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                selectedSong={selectedSong}
                setSelectedSong={setSelectedSong}
              />
            }
          />
          <Route path="/search" exact element={<Search />} />
        </Routes>
        <Footer selectedSong={selectedSong} />
      </Router>
    </>
  );
}

export default App;

{
  /* <Flex>
          
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
        </Flex> */
}
