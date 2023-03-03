import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/sets", async (req: Request, res: Response) => {
  try {
    res.status(200).send("Sets data");
  } catch (error) {
    res.send({ message: "Failed to fetch sets data", error: error });
  }
});

export { router as setsRouter };
