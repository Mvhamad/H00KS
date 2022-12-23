import React from 'react';
import MovieCard from './MovieCard';

import "../styles/movielist.css"

function MovieList({movies}) {
  
  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.posterUrl}
            description={movie.description}
            rating={movie.rating}
          />
        ))}
      </div>
    </>
  );
};



export default MovieList
