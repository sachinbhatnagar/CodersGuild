import React from "react";
import CardBody from "./CardBody";
import Image from "./Image";

function Card({ book }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image />
      <CardBody book={book} />
    </div>
  );
}

export default Card;
