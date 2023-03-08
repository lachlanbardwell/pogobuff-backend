import { IElo } from "../types/sets-schema";
import { connection } from "../helpers/connect";

export const saveEloData = async (eloData: IElo) => {
  try {
    const { playername, current } = eloData;
    const query = `
        INSERT INTO elo_data (playername, current)
        VALUES (?, ?)
      `;
    connection.query(query, (error, result) => {
      if (error) {
        console.error(`Error saving elo data: ${error.message}`);
      } else {
        console.log(`Inserted ${result} rows`);
      }
    });
  } catch (error) {
    console.error(`Error saving elo data: ${error}`);
  }
};
