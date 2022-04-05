import React, { useState } from "react";
import Gallery from "./Gallery";
import Makeup from "./Makeup";

function Logon() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleClicked = () => {
    setisLoggedIn(true);
  };

  return (
    <>
      <button onClick={handleClicked}> Click</button>
      <div>{isLoggedIn ? <Gallery /> : <Makeup />}</div>
    </>
  );
}

export default Logon;
