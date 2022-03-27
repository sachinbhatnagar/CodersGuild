import OpenSea from "./pages/OpenSea";
import Pexels from "./pages/Pexels";
import Gallery from "./pages/Gallery";
import Recipes from "./pages/Recipes";
import MyNav from "./pages/MyNav";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Today let's add Likes!!!!

// Now let's refactor code
// improve the handleLike with a one liner!!! (research) tip remove if/else

// instead of border display a fav icon (heart filled for likes and heart unfilled for not liked)

//Extra add an h2 to display the number of liked cards :)
//Remember to research!!!!!!

function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Pexels />} />
          <Route path="/unsplash" element={<Gallery />} />
          <Route path="/opensea" element={<OpenSea />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
