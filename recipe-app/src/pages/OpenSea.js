import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import DrinksCard from "./DrinksCard";
function OpenSea() {
  const [drinks, setDrinks] = useState([]);
  const [cocktail, setCocktail] = useState("vodka");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      //can write whatever logic you want
      console.log(response.data);
      setDrinks(response.data.drinks);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {drinks.map((drink) => {
            return (
              <div className="col-6 col-md-4">
                <DrinksCard
                  strDrinkThumb={drink.strDrinkThumb}
                  strDrink={drink.strDrink}
                  strCategory={drink.strCategory}
                  strInstructions={drink.strInstructions}
                />
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default OpenSea;
