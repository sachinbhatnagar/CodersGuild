import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MakeUpCard from "./MakeUpCard";

function Makeup() {
  const [products, setProducts] = useState([]);

  const url =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  useEffect(() => {
    console.log("UseEffect called");
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-6 col-md-4">
              <MakeUpCard
                price={product.price}
                name={product.name}
                description={product.description}
                image_link={product.image_link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Makeup;
