import express, { Request, Response } from "express";

const router = express.Router();

let eloData = { elo: 0 };

router.get("/api/sets", async (req: Request, res: Response) => {
  try {
    res.status(200).send(eloData);
  } catch (error) {
    res.send({ message: "Failed to fetch sets data", error: error });
  }
});

router.post("/api/sets", async (req: Request, res: Response) => {
  try {
    eloData.elo = req.body;
    res.status(200).send("elo saved");
  } catch (error) {
    res.send({ message: "Failed to fetch sets data", error: error });
  }
});

export { router as setsRouter };
