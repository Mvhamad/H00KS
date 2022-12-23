import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import { Data } from './Components/Data'
import "./App.css";

function App() {
  // initializing hooks
  const [movies, setMovies] = useState(Data);
  const [ratingFilter, setRatingFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', posterUrl: '', description: '', rating: '' });


  // filter by rating (function)
  const handleFilterRating = rating => {
    setRatingFilter(rating);
  };

  //filter by title (function)
  const handleFilterTitle = title => {
    setTitleFilter(title);
  };

  //Result of the filter by title or rating
  const filteredMovies = movies.filter(movie => {
    return (
      ratingFilter === '' || movie.rating === parseInt(ratingFilter, 10),
      movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    )
  });

  // function for adding a new movie 
  const handleNewMovieChange = event => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value,
    });
  };

  // function for submitting the movie
  const handleNewMovieSubmit = event => {
    event.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', posterUrl: '', description: '', rating: '' });
  };


  return (
    <>
      <div className='filter'>
        <div className="head">
          <h1>MOVIES</h1>
          <Filter handleFilterRating={handleFilterRating} handleFilterTitle={handleFilterTitle} />
        </div>
        <MovieList movies={filteredMovies} />
      </div>
      <h1 className='title'>Complete this form to add a video</h1>
      <div className="addMovie">
        <form onSubmit={handleNewMovieSubmit}>
          <label>
            Title <br />
             <input type="text" name="title" value={newMovie.title} onChange={handleNewMovieChange} />
          </label>
          <label>
            Poster <br />
            <input type="text" name="posterUrl" value={newMovie.posterUrl} onChange={handleNewMovieChange} />
          </label>
          <label>
            Description <br />
            <input type="text" name="description" value={newMovie.description} onChange={handleNewMovieChange} />
          </label>
          <label>
            Rating <br />
            <input type="text" name="rating" value={newMovie.rating} onChange={handleNewMovieChange} />
          </label>
          <button type="submit">Add movie</button>
        </form>
      </div>
    </>
  );
};

export default App;
