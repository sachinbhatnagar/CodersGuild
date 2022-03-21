import React from "react";
const url = `https://www.instagram.com/`;

function GalleryCard({
  image,
  title,
  first_name,
  alt_description,
  bio,
  portfolio,
}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={alt_description} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {first_name}
          {bio}
        </p>
      </div>
    </div>
  );
}

export default GalleryCard;
