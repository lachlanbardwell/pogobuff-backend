import mysql from "mysql2";

export const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PW,
  database: "pogobuff",
});
