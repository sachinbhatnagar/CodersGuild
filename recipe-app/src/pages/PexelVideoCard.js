import React from "react";

function PexelVideoCard({ link }) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={link}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PexelVideoCard;
