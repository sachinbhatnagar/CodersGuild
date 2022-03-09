import axios from "axios";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { GridSix } from "./GridSix";
// discography contains all songs(objects)
// we pass the discography var and setter from the App to Section
// we need to receive the selected song ID
// songID contains the selected song
// we can filter the discography and wherever object id matches the songID, that object will be assigned to selectedSong
function Section({
  discography,
  setDiscography,
  selectedSong,
  setSelectedSong,
}) {
  const [songId, setSongId] = useState(0);

  function settingItem(index) {
    setSongId(index);
    discography.map((item, index) => {
      // console.log("Song ID : " + songId + ", index is : " + index);
      if (index === songId) {
        // console.log(item.id);

        setSelectedSong({ ...item });
        // console.log("Yo man, this is selected Song");
        // console.log(selectedSong);
      }
    });
    // console.log("Boom, there you go!");
    // console.log(selectedSong);
  }
  useEffect(() => {
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/search?q=abba", {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",

          "x-rapidapi-key":
            "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
        },
      })
      .then((response) => {
        setDiscography(response.data.data);
      });
  }, [songId, selectedSong]);

  return (
    <GridSix>
      {discography.map((object, index) => {
        return (
          <Card
            settingItem={settingItem}
            src={object.album.cover}
            title={object.album.title}
            key={index}
            index={index}
            artist={object.artist.name}
          />
        );
      })}
    </GridSix>
  );
}

export default Section;
