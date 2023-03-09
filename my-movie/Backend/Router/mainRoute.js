import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

const routes = express.Router();
dotenv.config({ path: "my-movie/Backend/config.env" });
const key = process.env.API_KEY || "a2304d5d";
let favorites = [];

//GET by title/id
routes.route("/api/movie/:id").get(async function (req, res) {
  const imdbId = req.params.id;
  const uri = `https://www.omdbapi.com/?i=${imdbId}&y=&plot=short&apikey=${key}`;
  let movie;

  await fetch(uri)
    .then((res) => res.json())
    .then((data) => (movie = data));
  res.json(movie);

  //ADD try catch
  // try {
  //   const uri = `https://www.omdbapi.com/?i=${imdbId}&y=&plot=short&apikey=${key}`;
  //   await fetch(uri)
  //     .then((res) => res.json())
  //     .then((data) => (movie = data));
  //   res.json(movies);
  // } catch {
  //   console.log("an error occurred please try again");
  //   res.json({ Error: "An error occurred please try again" });
  // }
});

//GET array of movies by title adn year (optional)
routes.route("/api/movies").get(async function (req, res) {
  let searchValue = req.headers.searchvalue;
  let year = req.headers.year;
  let movies = [];
  try {
    const uri = `https://www.omdbapi.com/?s=${searchValue}&y=${year}&apikey=${key}`;
    await fetch(uri)
      .then((res) => res.json())
      .then((data) => (movies = data));
    res.json(movies);
  } catch {
    res.json({ Error: "An error occurred please try again" });
  }
});

//GET all favorites
routes.route("/api/favorites").get(function (req, res) {
  if (favorites.length < 0) {
    res.json({ Error: "No favorites yes" });
  } else {
    res.json(favorites);
  }
});

//POST new movie to favorie
routes.route("/api/favorites").post(function (req, res) {
  let favorite = req.body.favorite;
  favorites.push(favorite);
});

//DELETE movie from favorite
routes.route("/api/favorites").delete(function (req, res) {
  let id = req.body.id;
  console.log(favorites);
  if (favorites.length > 1) {
    favorites = favorites.find((e) => e.imdbId != id);
  }
});

export default routes;
