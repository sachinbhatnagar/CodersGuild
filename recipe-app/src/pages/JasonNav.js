import React from "react";

function JasonNav({ setEndPoint }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul>
            <li
              onClick={() => setEndPoint("posts")}
              className="nav-item active"
            >
              Posts
            </li>
            <li
              onClick={() => setEndPoint("comments")}
              className="nav-item active"
            >
              Comments
            </li>
            <li
              onClick={() => setEndPoint("albums")}
              className="nav-item active"
            >
              Albums
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default JasonNav;
