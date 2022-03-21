import React from "react";
//comment
function Card({ image, healthLabels, label, cuisineType, ingredientLines }) {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>

        <p className="card-text">{cuisineType}</p>
      </div>
      <ol className="list-group list-group-flush">
        {ingredientLines.map((ingredientLine, index) => {
          return <li key={index}>{ingredientLine}</li>;
        })}
      </ol>
      <div className="card-body">
        {healthLabels.slice(0, 5).map((healthLabel, index) => {
          return <span key={index}>{healthLabel}</span>;
        })}
      </div>
    </div>
  );
}

export default Card;
