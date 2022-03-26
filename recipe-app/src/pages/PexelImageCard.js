import React from "react";

function PexelImageCard({ photographer, medium, alt }) {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={medium} alt={alt} />
        <div className="card-body">
          <p className="card-text">{photographer}</p>
        </div>
      </div>
    </>
  );
}

export default PexelImageCard;
