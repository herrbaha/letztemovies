import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img src={poster_path ? (IMG_API + poster_path) : "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_960_720.jpg"} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="movie-average">{vote_average}</span>
      </div>
      <div className="movie-over">
        <h3 className="h3">Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie;