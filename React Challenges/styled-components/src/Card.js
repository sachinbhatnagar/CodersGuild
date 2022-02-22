import React from "react";

function Card({
  image,
  title,
  price,
  handlePriceIncrease,
  handlePriceDecrease,
}) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="image" />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <button
          className="price-buttons"
          onClick={handlePriceIncrease.bind(this, price)}
        >
          +
        </button>
        <button className="price-btn">${price}</button>
        <button
          className="price-buttons"
          onClick={handlePriceDecrease.bind(this, price)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Card;
