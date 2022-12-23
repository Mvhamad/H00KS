import React, { useState } from 'react';
import '../styles/filter.css'

function Filter({ handleFilterRating, handleFilterTitle }) {
  // initialisation des hooks
  const [rating, setRating] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  // for rating
  const handleRating = event => {
    setRating(event.target.value);
    handleFilterRating(event.target.value);
  };
  // for title
  const handleTitle = event => {
    setTitleFilter(event.target.value);
    handleFilterTitle(event.target.value);
  };

  return (
    <>
      <div className="result">

        <div className='ratingFilter'>
          <label>
            Filter by rating:
            <select value={rating} onChange={handleRating}>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
        <div>
          <label className='titleFilter'>
            <input type="text" placeholder='Search Movies' value={titleFilter} onChange={handleTitle} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Filter;
