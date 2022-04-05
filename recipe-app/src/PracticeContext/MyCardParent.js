import React, { createContext } from "react";
import Mycard from "./Mycard";

export const numberContext = createContext();
const MyCardParent = () => {
  const views = 10;
  return (
    <>
      <numberContext.Provider value={views}>
        <Mycard />
      </numberContext.Provider>
    </>
  );
};

export default MyCardParent;
