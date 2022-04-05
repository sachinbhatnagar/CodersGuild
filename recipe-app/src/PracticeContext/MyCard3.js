import React, { useContext } from "react";
import { numberContext } from "./MyCardParent";

function MyCard3() {
  const views = useContext(numberContext);
  return <div style={{ padding: "0 3em" }}>Views{views}</div>;
}

export default MyCard3;
