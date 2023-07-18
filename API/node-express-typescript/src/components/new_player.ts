import { Player } from "./player";
import mysql from 'mysql2';

const createConnection = () => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '01540787Ra!',
      database: 'player',
    });
    return connection;
  };
  
export async function create_new_player(player: Player) {
  const connection = createConnection();
  const newPlayer = new Player(player.ID, player.FirstName, player.LastName, player.APT, player.SET, player.NationalAssociation, player.average, player.position);
  try {
    await connection.execute('INSERT INTO players (ID, FirstName, LastName, APT, `SET`, NationalAssociation, `average`, position) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [newPlayer.ID, newPlayer.FirstName, newPlayer.LastName, newPlayer.APT, newPlayer.SET, newPlayer.NationalAssociation, newPlayer.average, newPlayer.position]);
  } catch (err) {
    console.error('Error executing query:', err);
  }
}