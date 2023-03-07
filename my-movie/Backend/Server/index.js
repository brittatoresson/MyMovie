import express from "express";
import cors from "cors";
import mainRoute from "../Router/mainRoute.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
