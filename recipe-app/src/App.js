import OpenSea from "./pages/OpenSea";
import Pexels from "./pages/Pexels";
import Gallery from "./pages/Gallery";
import Recipes from "./pages/Recipes";
import MyNav from "./pages/MyNav";
import UserForm from "./pages/UserForm";
import Makeup from "./pages/Makeup";
import Filtering from "./pages/Filtering";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [saved, setSaved] = useState([]);
  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Pexels />} />
          <Route
            path="/unsplash"
            element={<Gallery saved={saved} setSaved={setSaved} />}
          />
          <Route path="/opensea" element={<OpenSea />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/filtering" element={<Filtering />} />
        </Routes>
      </Router>
    </>
  );
}
// save > postman > hooks... > projects
export default App;
