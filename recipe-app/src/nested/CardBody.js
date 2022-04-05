import React from "react";
import H5 from "./H5";
import Paragraph from "./Paragraph";
import Pages from "./Pages";

function CardBody({ book }) {
  const { author, description, pages } = book;
  return (
    <div className="card-body">
      <H5 author={author} />
      <Paragraph description={description} />
      <Pages pages={pages} />
    </div>
  );
}

export default CardBody;
