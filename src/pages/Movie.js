import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";

function Movie() {
  const [movies, setMovies] = useState({});

  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
      fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
    }, [movieId]);

    const gen =movies.genres.map((genre ,index)=>(<span key = {index}>{genre}</span>
    ))
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        {gen}
      </main>
    </>
  );
};

export default Movie;
