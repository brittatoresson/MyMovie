import { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";

function Movies() {
  const [movie, setMovie] = useState<IMovie>();

  async function GetMovies() {
    let imdbId = sessionStorage.getItem("imdbId");
    const response = await fetch(`http://localhost:3001/api/movie/${imdbId}`);
    setMovie(await response.json());
  }

  useEffect(() => {
    GetMovies();
  }, []);

  function SaveToFavorites(id: string): void {
    sessionStorage.setItem("saveToFavorite", id);
    // SPARA MED POST ISTÄLLET???
    // const response = await fetch(`http://localhost:3001/api/movies`, {
    //   method: "GET",
    //   headers: {
    //     year: `${Year}`,
    //     searchValue: InputValue,
    //   },
    // });
  }

  return (
    <section id="movie_container">
      {movie ? (
        <ul>
          <h4>
            {movie.Title} ({movie.Year})
          </h4>
          {movie.Type != "movie" ? <li>type: {movie.Type}</li> : null}
          <li>{movie.Plot}</li>
          <img src={movie.Poster} />
          <li>Writer: {movie.Writer}</li>
          <br></br>
          <li>Actors: {movie.Actors}</li>
          <li onClick={() => SaveToFavorites(movie.imdbID)}> ❤️ 🔆</li>
        </ul>
      ) : (
        <p>enter title</p>
      )}
    </section>
  );
}

export default Movies;
