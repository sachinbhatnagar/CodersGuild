import React, { useState, useEffect } from "react";
import axios from "axios";
import PexelImageCard from "./PexelImageCard";
import PexelVideoCard from "./PexelVideoCard";

import "bootstrap/dist/css/bootstrap.min.css";

function Pexels() {
  const AppKey = process.env.REACT_APP_PEXEL_KEY;
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("cars");
  const imageUrl = `https://api.pexels.com/v1/search?query=${search}`;
  const videoUrl = `https://api.pexels.com/videos/search?query=${search}`;

  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };
  const getData = () => {
    axios
      .get(imageUrl, {
        headers: {
          Authorization: `${AppKey}`,
        },
      })
      .then((response) => {
        console.log("Image url ");
        console.log(response.data.photos);
        setPhotos(response.data.photos);
      })
      .catch((error) => console.log("Images error " + error));
    axios
      .get(videoUrl, {
        headers: {
          Authorization: `${AppKey}`,
        },
      })
      .then((response) => {
        console.log("Video url ");
        setVideos(response.data.videos);
      })
      .catch((error) => console.log("Images error " + error));
  };
  useEffect(() => {
    console.log("Am I rendering?");
    getData();
  }, []);
  return (
    <>
      <div className="row justify-content-center m-3 w-50  mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="container">
        <div className="row">
          {photos.map((photo, id) => {
            return (
              <div className="col-6 col-md-4">
                <PexelImageCard
                  key={id}
                  photographer={photo.photographer}
                  medium={photo.src.medium}
                  alt={photo.alt}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="row">
          {videos.map((video) => {
            return (
              <div key={video.id} className="col-6 col-md-4">
                <PexelVideoCard link={video.video_files[0].link} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pexels;
