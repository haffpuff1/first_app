import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { validate } from "./validation/validation";
import { create_new_player } from "./src/components/new_player";
import { Player } from "./src/components/player";
import { create_new_team } from "./src/components/team";
import { getPlayers } from "./src/components/summary";
import { random_team } from "./src/components/random";
import { highest_APT } from "./src/components/high_APT";
import {lowest_avg} from "./src/components/avg";
import { create_new_player_schema } from "./player_schema";
import {create_new_team_schema} from "./player_schema";
import {random_team_schema} from "./player_schema";
import { team_info } from "./src/components/team_info";
import { nb_req } from "./src/components/nb_req";
import { sort_by_APT } from "./src/components/sort_APT";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post('/new_Player', validate(create_new_player_schema), async (req: Request, res: Response) => {
  await create_new_player(req.body as Player);
  res.statusCode = 201;
  res.send('New player created successfully.');
});

app.get('/new_team', validate(create_new_team_schema), async (req: Request, res: Response) => {
  await create_new_team(req.body as team_info);
  res.statusCode = 201;
  res.send('New team created successfully.');
});

app.get('/random_team', validate(random_team_schema), async (req: Request, res: Response)=> {
  const result = await random_team(req.body as nb_req);
  res.statusCode = 201;
  res.json(result);
});

app.get('/get_Players' ,async(req: Request, res: Response) => {
  const result = await getPlayers();
  res.statusCode = 201;
  res.json(result);

});
app.get('/sort_by_APT',async(req: Request, res: Response) => {
  const result = await sort_by_APT();
  res.statusCode = 201;
  res.json(result);
});

app.get('/highest_APT', async (req: Request, res: Response) => {
const result = await highest_APT();
res.statusCode = 201;
res.send(result);
});

app.get('/lowest_avg', async(req: Request, res: Response) => {
  const result = await lowest_avg();
  res.statusCode = 201;
  res.json(result);
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// npm run dev