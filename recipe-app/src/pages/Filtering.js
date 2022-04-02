import React, { useState, useEffect } from "react";

function Filtering() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = fetch(
      "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const sliced = data.slice(0, 499);
        setFilms(sliced);
      });
  }, []);

  const handleSearch = () => {
    setFilms(films.filter((film) => film.title.includes(search)));
  };
  return (
    <div className="container">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
      />
      <button onClick={handleSearch}>search...</button>
      <div className="row">
        {films.map((film, index) => (
          <div key={index} className="col-sm-3">
            <h4>{film.title}</h4>
            <h3>{film.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtering;
