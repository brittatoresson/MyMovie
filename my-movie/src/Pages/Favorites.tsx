import { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";

function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  async function GetFavorites() {
    const response = await fetch("http://localhost:3001/api/favorites");
    const data = await response.json();
    setFavoriteMovies(data);
  }

  async function DeleteFavorite(id: string) {
    const response = await fetch("http://localhost:3001/api/favorites", {
      method: "Delete",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    GetFavorites();
  }

  useEffect(() => {
    GetFavorites();
  }, []);

  return (
    <section>
      <h2>Favorites</h2>
      {favoriteMovies
        ? favoriteMovies.map((item: IMovie, i) => (
            <ul key={i}>
              <li onClick={() => DeleteFavorite(item.imdbID)}>{item.Title}</li>
            </ul>
          ))
        : null}
    </section>
  );
}

export default Favorites;
