import React, { useState } from "react";
const url = `https://www.instagram.com/`;

function GalleryCard({
  image,
  title,
  first_name,
  alt_description,
  bio,
  setGlobalCount,
  globalCount,
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState("");

  //likes
  //when user click on image
  const handleLike = () => {
    setGlobalCount(globalCount + 1);
    if (count == "") {
      setCount("You liked this photo");
    } else {
      return;
    }
    !liked ? setLiked(true) : setLiked(false);
  };

  return (
    <div className="card">
      <img
        onClick={() => handleLike()}
        src={image}
        className="card-img-top"
        alt={alt_description}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h4>{count}</h4>
        <p className="card-text">
          {first_name}
          {bio}
        </p>
        <i
          class={"fa fa-heart-o" + (liked ? "fa fa-heart" : "fa fa-heart-o")}
        ></i>
      </div>
    </div>
  );
}

export default GalleryCard;
