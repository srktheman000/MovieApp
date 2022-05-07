import React from "react";
import "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import blank from "../../Assets/blank.jpg";

function Card(props) {
  return (
    <div className="col-lg-4 col-md-2 cardcontainer">
      <Link exact to={`/detailpage/${props.item.id}`}>
        {props.item.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`}
            alt="Movieimage"
            className="movieImage"
          />
        ) : (
          <img src={blank} alt="Movie Name" className="movieImage" />
        )}
      </Link>

      <div className="moviename">
        {props.item.original_title || props.item.original_name}
      </div>
      <div className="rating">Raiting : {props.item.vote_average}</div>
    </div>
  );
}

export default Card;
