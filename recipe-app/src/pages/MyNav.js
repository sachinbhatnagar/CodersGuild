import React from "react";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <h3 className="navbar-brand">MyApp</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <Link to="/">Home</Link> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Pexels
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/unsplash">
              Unsplash
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/opensea">
              Cocktails
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/recipes">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNav;
