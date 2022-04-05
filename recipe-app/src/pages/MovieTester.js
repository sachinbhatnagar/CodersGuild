import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieTester() {
  const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ce1ae4c31f95d8ef09f1a50a37c94e";

  useEffect(() => {
    axios.get(URL).then((response) => console.log(response.data.results));
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieTester;
