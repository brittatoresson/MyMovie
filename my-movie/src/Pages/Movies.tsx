import { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";

function Movies() {
  const [movie, setMovie] = useState<IMovie>();

  async function GetMovies() {
    let imdbId = sessionStorage.getItem("imdbId");
    console.log(imdbId);

    const response = await fetch(`http://localhost:3001/api/movie/${imdbId}`);
    setMovie(await response.json());
  }

  useEffect(() => {
    GetMovies();
  }, []);

  return (
    <section>
      <p>Movies</p>
    </section>
  );
}

export default Movies;
