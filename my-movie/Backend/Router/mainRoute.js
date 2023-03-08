import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

const routes = express.Router();
dotenv.config({ path: "my-movie/Backend/config.env" });
const key = process.env.API_KEY || "a2304d5d";

//GET by title/id
routes.route("/api/movie/:id").get(async function (req, res) {
  const imdbId = req.params.id;
  const uri = `https://www.omdbapi.com/?i=${imdbId}&y=&plot=short&apikey=${key}`;
  let movie;

  await fetch(uri)
    .then((res) => res.json())
    .then((data) => (movie = data));
  res.json(movie);
});

//GET array of movies by title adn year (optional)
routes.route("/api/movies").get(async function (req, res) {
  let searchValue = req.headers.searchvalue;
  let year = req.headers.year;
  let movies = [];

  try {
    // const uri = `https://www.omdbapi.com/?s=${searchValue}&y=${year}=json&apikey=${key}`; ORGINAAAL
    const uri = `https://www.omdbapi.com/?s=${searchValue}&y=${year}&apikey=${key}`;
    await fetch(uri)
      .then((res) => res.json())
      .then((data) => (movies = data));
    res.json(movies);
  } catch {
    console.log("an error occurred please try again");
    res.json({ Error: "An error occurred please try again" });
  }
});

//GET object from ID
routes.route("/api/:id").get(function (req, res) {});

//POST new object
routes.route("/api/").post(function (req, res) {});

//PUT with ID
routes.route("/api/:id").put(function (req, res) {});

//DELETE object from DB
routes.route("/api/:id").delete(function (req, res) {});

// module.exports = routes;
export default routes;
