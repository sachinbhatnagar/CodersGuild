import axios from "axios";
import React, { useState, useEffect } from "react";
import JasonNav from "./JasonNav";
import JasonChild from "./JasonChild";

function Jason() {
  const [endpoint, setEndPoint] = useState("comments");
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then((response) => {
        const sliced = response.data.slice(0, 50);
        setResources(sliced);
      });
  }, []);

  return (
    <div className="container">
      <JasonNav setEndPoint={setEndPoint} />
      <JasonChild resources={resources} endpoint={endpoint} />
    </div>
  );
}
// if endpoint  equals todo, then return (), otherwise if endpoint == second,
export default Jason;
