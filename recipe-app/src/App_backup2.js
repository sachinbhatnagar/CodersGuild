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

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./useContextPractice/First";

// First Step: Creating a Context
export const UserContext = createContext();

// Second Step: Provider

// Third Step:
function App_backup2() {
  const [users, setUser] = useState({ name: "John Doe", age: 15 });


  return (
    <>
      <UserContext.Provider value={user}>
        <First user={user} />
      </UserContext.Provider>
    </>
  );
}
// save > postman > hooks... > projects
export default App_backup2;
