import axios from "axios";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { GridSix } from "./GridSix";
// discography contains all songs(objects)
// we pass the discography var and setter from the App to Section
// we need to receive the selected song ID
// songID contains the selected song
// we can filter the discography and wherever object id matches the songID, that object will be assigned to selectedSong
function Section({ setSelectedSong }) {
  const [discography, setDiscography] = useState([]);

  useEffect(() => {
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/search?q=steps", {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",

          "x-rapidapi-key":
            "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
        },
      })
      .then((response) => {
        setDiscography(response.data.data);
      });
  }, []);

  return (
    <GridSix>
      {discography.map((object, index) => {
        return index < 5 ? (
          <Card
            setSelectedSong={setSelectedSong}
            src={object.album.cover}
            title={object.album.title}
            key={index}
            index={index}
            artist={object.artist.name}
          />
        ) : null;
      })}
    </GridSix>
  );
}

export default Section;
