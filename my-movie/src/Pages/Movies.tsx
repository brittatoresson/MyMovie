import { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import Footer from "../Components/Footer";

function Movies() {
  const [movie, setMovie] = useState<IMovie>();
  const [isFavorite, setIsFavorite] = useState<boolean>();

  async function GetMovies() {
    let imdbId = sessionStorage.getItem("imdbId");
    const response = await fetch(`http://localhost:3001/api/movie/${imdbId}`);
    setMovie(await response.json());
  }

  useEffect(() => {
    GetMovies();
  }, []);

  async function SaveToFavorites(movie: IMovie) {
    setIsFavorite(!isFavorite);
    const response = await fetch(`http://localhost:3001/api/favorites`, {
      method: "POST",
      body: JSON.stringify({ favorite: movie }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <section id="movie_container">
      {movie ? (
        <ul>
          <h4>
            {movie.Title} ({movie.Year})
            <TiHeartOutline
              onClick={() => SaveToFavorites(movie)}
              className={isFavorite ? "activeHeart blinkHeart" : "blinkHeart"}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Add to favorite"
            />
            <Tooltip id="my-tooltip" />
          </h4>

          <li>{movie.Plot}</li>
          <img src={movie.Poster} />
          {movie.Type != "movie" ? <li>Type: {movie.Type}</li> : null}
          <li>Writer: {movie.Writer}</li>
          <br></br>
          <li>Actors: {movie.Actors}</li>
        </ul>
      ) : null}
      <Footer></Footer>
    </section>
  );
}

export default Movies;
