import React from "react";
import axios from "axios";
import GalleryCard from "../GalleryCard";
import { useEffect, useState } from "react";
const REACT_APP_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

//we already got the css!

function Gallery() {
  const [search, setSearch] = useState("a");
  const [images, setImages] = useState([]);
  const [globalCount, setGlobalCount] = useState(0);
  const [likesList, setLikesList] = useState([]);

  const url = `https://api.unsplash.com/search/photos?query=${search}&client_id=${REACT_APP_ACCESS_KEY}`;

  const handleClick = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => setImages(response.data.results));
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setImages(response.data.results);
    });
  }, []);

  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} type="search" />
      <button onClick={(e) => handleClick(e)}>search</button>
      <h1>Total likes: {likesList.length}</h1>
      <hr />
      <div className="container">
        <div className="row">
          {images.map((image, index) => {
            return (
              <div key={index} className="col-6 col-md-4">
                <GalleryCard
                  image={image.urls.regular}
                  alt_description={image.alt_description}
                  title={image.alt_description}
                  first_name={image.user.name}
                  bio={image.user.bio}
                  setGlobalCount={setGlobalCount}
                  globalCount={globalCount}
                  setLikesList={setLikesList}
                  likesList={likesList}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;

// 10 RANDOM IMAGES   const url = `https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}`;
