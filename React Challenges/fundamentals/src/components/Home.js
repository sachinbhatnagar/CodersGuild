import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// Add Check to Check for the localstorage var username
function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setName(localStorage.getItem("username"));
    } else {
      navigate("/login"); //window.location.href
    }
    console.log(name);
  }, []);
  return (
    <div>
      <Link to="/todo">ToDO</Link>
      <h2> Hi, {name} </h2>
    </div>
  );
}

export default Home;
