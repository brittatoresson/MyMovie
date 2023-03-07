import { useState } from "react";
import { IMovies } from "../Interface/IMovie";
import { useNavigate } from "react-router-dom";

function Search() {
  const [movies, setMovies] = useState<IMovies>();
  const navigate = useNavigate();

  async function GetMovies() {
    const response = await fetch("http://localhost:3001/api/movies");
    setMovies(await response.json());
  }

  function ShowDetails(id: string) {
    navigate("/movie");
    sessionStorage.setItem("imdbId", id);
    //Spara till local storage??
  }

  return (
    <section>
      <>
        <p onClick={GetMovies}>söök</p>
        {movies ? (
          movies.Search.map((movie, i) => {
            return (
              <ul key={i} onClick={() => ShowDetails(movie.imdbID)}>
                <li>title: {movie.Title}</li>
                <li>year: {movie.Year}</li>
                <li>type: {movie.Type}</li>
                <img src={movie.Poster} />
              </ul>
            );
          })
        ) : (
          <p>enter title</p>
        )}
      </>
    </section>
  );
}

export default Search;
