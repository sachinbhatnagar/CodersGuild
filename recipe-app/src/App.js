import OpenSea from "./pages/OpenSea";
import Pexels from "./pages/Pexels";
import Gallery from "./pages/Gallery";
import Recipes from "./pages/Recipes";
import MyNav from "./pages/MyNav";
import UserForm from "./pages/UserForm";
import Makeup from "./pages/Makeup";
import Filtering from "./pages/Filtering";
import Jason from "./pages/Jason";
import MovieTester from "./pages/MovieTester";
import MyForm from "./pages/MyForm";
import Bookstore from "./nested/Bookstore";
import "bootstrap/dist/css/bootstrap.min.css";
import BootsrapSlider from "./pages/BootsrapSlider";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import myBeautifulBooks from "./books.json";
import Work from "./pages/Work";
import SimpleCounter from "./pages/SimpleCounter";
import LoadingPractice from "./LoadingPractice";
import NewForm from "./pages/newForm/components/NewForm";

function App() {
  const [saved, setSaved] = useState([]);
  const [login, setLogin] = useState(true);
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
          <Route path="/newform" element={<NewForm />} />
          <Route path="/opensea" element={<OpenSea />} />
          <Route path="/loading" element={<LoadingPractice />} />
          {login && <Route path="/recipes" element={<Recipes />} />}

          <Route path="/form" element={<UserForm />} />
          <Route path="/counter" element={<SimpleCounter />} />

          <Route path="/makeup" element={<Makeup />} />
          <Route path="/filtering" element={<Filtering />} />
          <Route path="/resources" element={<Jason />} />
          <Route path="/movies" element={<MovieTester />} />
          <Route path="/myform" element={<MyForm />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/bookstore"
            element={<Bookstore myBeautifulBooks={myBeautifulBooks} />}
          />
          <Route path="/slider" element={<BootsrapSlider />} />
        </Routes>
      </Router>
    </>
  );
}
// save > postman > hooks... > projects
export default App;
