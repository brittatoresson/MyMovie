import { ChangeEvent, useState } from "react";
import { IMovies } from "../Interface/IMovie";
import { useNavigate } from "react-router-dom";
import poster from "../Assets/defaultPoster.jpg";
import Footer from "../Components/Footer";

function Search() {
  const [movies, setMovies] = useState<IMovies>();
  const [InputValue, SetInputValue] = useState("");
  const [Year, SetYear] = useState<number>();
  const navigate = useNavigate();

  async function GetMovies(event: any) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3001/api/movies`, {
      method: "GET",
      headers: {
        year: `${Year}`,
        searchValue: InputValue,
      },
    });
    setMovies(await response.json());
  }

  function ShowDetails(id: string) {
    navigate("/movie");
    sessionStorage.setItem("imdbId", id);
  }

  function GetInputValue(e: ChangeEvent<HTMLInputElement>) {
    SetInputValue(e.target.value);
  }

  function GetYear(e: ChangeEvent<HTMLInputElement>) {
    let parseInput = parseInt(e.target.value);
    SetYear(parseInput);
  }

  return (
    <section id="search_container">
      <>
        <form onSubmit={(e) => GetMovies(e)}>
          <input
            placeholder="title"
            required
            onChange={(e) => GetInputValue(e)}
            onClick={() => SetInputValue("")}
            value={InputValue}
          ></input>
          <input
            placeholder="year"
            onChange={(e) => GetYear(e)}
            onClick={() => SetYear(undefined)}
            value={Year}
          ></input>
          <input type="submit" placeholder="Search" value="Search" />
          {movies?.Search ? `${movies.totalResults} results` : movies?.Error}
        </form>

        <section id="search_result_container">
          {movies?.Search ? (
            movies.Search.map((movie, i) => {
              return (
                <ul key={i} onClick={() => ShowDetails(movie.imdbID)}>
                  {movie.Poster != "N/A" ? (
                    <img src={movie.Poster} />
                  ) : (
                    <img src={poster}></img>
                  )}
                  <li className="bold">{movie.Title}</li>
                  <li>({movie.Year})</li>
                </ul>
              );
            })
          ) : (
            <p>Search for a movie</p>
          )}
        </section>
      </>
      <Footer></Footer>
    </section>
  );
}

export default Search;
