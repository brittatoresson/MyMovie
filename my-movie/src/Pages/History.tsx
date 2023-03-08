import { log } from "console";
import { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";

function History() {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie>();

  async function GetFavorites() {
    let imdbId = sessionStorage.getItem("saveToFavorite");
    console.log(imdbId);
    const response = await fetch(`http://localhost:3001/api/movie/${imdbId}`);
    console.log(await response.json());

    // setFavoriteMovies(await response.json());
    // console.log(favoriteMovies);
  }

  useEffect(() => {
    GetFavorites();
  }, []);
  return <section>History</section>;
}

export default History;
