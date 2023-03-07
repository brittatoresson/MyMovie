import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

const routes = express.Router();
dotenv.config({ path: "my-movie/Backend/config.env" });
const key = process.env.API_KEY || "a2304d5d";

//GET all by title/id
routes.route("/api/movie/:id").get(async function (req, res) {
  const imdbId = req.params.id;
  let title = "inception";
  // const uri = `https://www.omdbapi.com/?t=${title}&=json&apikey=a2304d5d`;
  const uri = `https://www.omdbapi.com/?i=${imdbId}&y=&plot=short&apikey=a2304d5d`;

  await fetch(uri)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

//GET array of movies for title
routes.route("/api/movies").get(async function (req, res) {
  const uri = `https://www.omdbapi.com/?s=inception&=json&apikey=${key}`;
  let movies;
  await fetch(uri)
    .then((res) => res.json())
    .then((data) => (movies = data));
  res.json(movies);
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
