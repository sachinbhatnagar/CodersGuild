import React from "react";

function MakeUpCard({ image_link, description, name, price }) {
  return (
    <div className="card">
      <img
        style={{ width: "60%" }}
        src={image_link}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default MakeUpCard;
