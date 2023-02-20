import express from "express";
import { json } from "body-parser";
import { setsRouter } from "./routes/sets";

const app = express();

app.use(json());
app.use(setsRouter);

app.listen(3001, () => {
  console.log("Pogobuff running on port 3001");
});
