import express from "express";
import mysql from "mysql";
import * as dotenv from "dotenv";
import { json } from "body-parser";
import { setsRouter } from "./routes/sets-route";

dotenv.config();

const app = express();

app.use(json());
app.use(setsRouter);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PW,
  database: "pogobuff",
});

try {
  connection.connect();
  console.log("Connected to MYSQL");
} catch (error) {
  console.error("Error connecting to MYSQL", error);
}

// connection.end();

app.listen(3001, () => {
  console.log("Pogobuff running on port 3001");
});
