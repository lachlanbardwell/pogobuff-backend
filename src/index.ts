import express from "express";
import * as dotenv from "dotenv";
import { json } from "body-parser";
import { setsRouter } from "./routes/sets-route";
import { createLog } from "./middleware/log";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(json());
app.use(createLog);
app.use(setsRouter);

// try {
//   connection.connect();
//   console.log("Connected to MYSQL");
// } catch (error) {
//   console.error("Error connecting to MYSQL", error);
// }

// connection.end();

app.listen(3001, () => {
  console.log("Pogobuff running on port 3001");
});
