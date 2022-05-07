import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [header, setheader] = useState(false);
  const [search, setSearch] = useState("");
  const searchnavigate = useNavigate();
  function searchhandler() {
    searchnavigate(`../search/${search}`);
  }
  function responsive() {
    setheader(!header);
  }
  return (
    <div className="header">
      <div className="logo">MovieDb</div>
      <a href="./" className="toggle-button" onClick={responsive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`pages {header ? "active" : ""}`}>
        <nav className="links">
          <Link className="linkName" to="/">
            Popular
          </Link>
          <Link className="linkName" to="/TopRatedPage">
            Top Rated
          </Link>
          <Link className="linkName" to="/UpcomingMoviePage">
            Upcoming
          </Link>
        </nav>
        <div className="searchForm">
          <input
            className="searchInput"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <Link exact to={`/search/${search}`}>
            <button className="searchButton" onClick={searchhandler}>
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
