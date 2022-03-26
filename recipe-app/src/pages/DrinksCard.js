import React from "react";

function DrinksCard({ strDrinkThumb, strDrink, strCategory, strInstructions }) {
  return (
    <div className="card">
      <img className="card-img-top" src={strDrinkThumb} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{strDrink}</h5>

        <p className="card-text">{strCategory}</p>
      </div>

      <div className="card-body">
        <p>{strInstructions}</p>
      </div>
    </div>
  );
}

export default DrinksCard;
