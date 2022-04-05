import React from "react";

function JasonChild({ resources, endpoint }) {
  switch (endpoint) {
    case "posts":
      return (
        <div className="row">
          {resources.map((resource) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">{resource.body}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "comments":
      return (
        <div className="row">
          {resources.map((resource) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{resource.name}</h5>
                <h6 className="card-title">{resource.email}</h6>

                <p className="card-text">{resource.body}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "albums":
      return (
        <div className="row">
          {resources.map((resource) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{resource.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      break;
  }
}

export default JasonChild;
