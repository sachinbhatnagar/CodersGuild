import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GridSix } from "./GridSix";
import Card from "./Card";

function Search() {
  const [textInput, setTextInput] = useState("");
  const [searchPerson, setSearchPerson] = useState([]);
  useEffect(() => {
    console.log("Use Effect Called");
    axios
      .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=abba`, {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",

          "x-rapidapi-key":
            "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
        },
      })
      .then((response) => {
        setSearchPerson(response.data.data);
      });
  }, []);

  const handleSearch = (e) => {
    setTextInput(e.target.value);

    axios
      .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${textInput}`, {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",

          "x-rapidapi-key":
            "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
        },
      })
      .then((response) => {
        setSearchPerson([...response.data.data]);
      });
  };
  return (
    <>
      <input onChange={(e) => handleSearch(e)} type="search" />

      {
        <GridSix>
          {searchPerson.map((object, index) => {
            return index < 5 ? (
              <Card
                src={object.album.cover}
                title={object.album.title}
                key={index}
                index={index}
                artist={object.artist.name}
              />
            ) : null;
          })}
        </GridSix>
      }
    </>
  );
}

export default Search;
