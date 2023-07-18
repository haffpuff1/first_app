import mysql from 'mysql2/promise';
import { nb_req } from "./nb_req";

const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01540787Ra!',
    database: 'player',
  });
  return connection;
};


export async function sort_by_APT() {
    const connection = await createConnection();
    try {
      const [rows,fields] = await connection.execute(` SELECT * FROM players ORDER BY APT ASC `);
      return rows;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    } finally {
      connection.end();
    }
  }
  

