import { IElo } from "../types/sets-schema";
import { connection } from "../helpers/connect";

export const getElo = async (eloData: IElo) => {
  try {
    const { playername } = eloData;
    const query =
      "SELECT * FROM elo e INNER JOIN sets s ON e.player_id = s.playername WHERE e.playername = :playername";
    connection.query(
      query,
      {
        playername: playername,
      },
      (error, result) => {
        if (error) {
          console.error(`Error retrieving elo data: ${error.message}`);
        } else {
          console.log(`Got ${result} elo data`);
        }
      }
    );
  } catch (error) {
    console.error(`Error retrieving elo data: ${error}`);
  }
};
