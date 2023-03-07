import { IElo } from "../types/sets-schema";
import mysql from "mysql";

const pool = mysql.createPool({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "dashboard_db",
});

export const saveEloData = async (eloData: IElo) => {
  try {
    pool.getConnection((error, connection) => {
      if (error) {
        console.error(`Error getting connection from pool: ${error.message}`);
        return;
      }

      const { starting, current, change, ending } = eloData;
      const query = `
        INSERT INTO elo_data (player_id, elo)
        VALUES (?, ?)
      `;
      const params = [starting, current, change, ending];
      connection.query(query, params, (error, result) => {
        if (error) {
          console.error(`Error saving elo data: ${error.message}`);
        } else {
          console.log(`Inserted ${result.affectedRows} rows`);
        }
        connection.release();
      });
    });
  } catch (error) {
    console.error(`Error saving elo data: ${error}`);
  }
};
