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
  setLikesList,
  likesList,
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState("");

  //likes
  //when user click on image
  const handleLike = () => {
    if (likesList.includes(title)) {
      setLikesList((previousValue) => {
        console.log(previousValue, "previous value inside remove condition");
        return likesList.filter((likedCard) => {
          console.log("The app has crrashed");
          return likedCard !== title;
        });
      });
    } else {
      setLikesList([...likesList, title]);
    }

    if (count == "") {
      // setGlobalCount(globalCount + 1);
      setCount("You liked this photo");
    } else {
      // setGlobalCount(globalCount - 1);
      setCount("");
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
          className={
            "fa fa-heart-o" +
            (likesList.includes(title) ? "fa fa-heart" : "fa fa-heart-o")
          }
        ></i>
      </div>
    </div>
  );
}

export default GalleryCard;

// handlelike > setter([...previous values, like])
