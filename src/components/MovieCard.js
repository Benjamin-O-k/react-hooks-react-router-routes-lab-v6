import {Link} from 'react-router-dom';
import React from 'react';

function MovieCard({movie}) {

  return (
    <article>
        <h2>{movie.title}</h2>
        <Link to={`/movies/${movie.id}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;
