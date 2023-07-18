import { Player } from "./player";
import mysql from 'mysql2/promise';
import { team_info } from "./team_info";

const createConnection = async () => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '01540787Ra!',
      database: 'player',
    });
    return connection;
  };
  
export async function create_new_team(team: team_info)   {
  const defender: number = team.defender;
  const midfielders: number = team.midfielders;
  const attackers: number = team.attackers;

  const connection = await createConnection();
  try {
    const [rows,fields] = await connection.execute(`SELECT * FROM players WHERE position = 'defender' LIMIT ${defender} `);
    console.log(rows);
    const [rowss,fieldss] = await connection.execute(`SELECT * FROM players WHERE position = 'midfielder' LIMIT ${midfielders} `);
    console.log(rowss);
    const [rowsss,fieldsss] = await connection.execute(`SELECT * FROM players WHERE position = 'attacker' LIMIT ${attackers}`);
    console.log(rowsss);
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  } finally {
    connection.end();
  }
}

