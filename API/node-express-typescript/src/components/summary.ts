import mysql from 'mysql2/promise';  
const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01540787Ra!',
    database: 'player',
  });
  return connection;
};

export async function getPlayers() {
 const connection = await createConnection();
    try {
      const [rows,fields] = await connection.execute(`SELECT position, COUNT(*) AS count FROM players GROUP BY position `);
      return rows;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    } finally {
      connection.end();
    }
  }
  