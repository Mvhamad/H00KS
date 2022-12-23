import React from 'react';
import "../styles/moviecard.css"
const MovieCard = (props) => {
  return (
    <>
    <div className="container">
      <div className="card">
        <h3>{props.title}</h3>
        <img src={props.poster} alt={props.title} />
        <p>{props.description}</p>
        <p> <b>Rating :</b> {props.rating}/10</p>
      </div>
    </div>
    </>
  );
};


export default MovieCard;
