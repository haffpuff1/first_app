import express from 'express';
import bodyParser from 'body-parser';

import { Player } from "./player";
import { create_new_player } from "./new_player";
import { create_new_team } from "./team";
import { getPlayers } from "./summary";
import { random_team } from "./random";
import { sort_by_APT } from "./sort_APT";
import {highest_APT} from"./sort_APT";
import {lowest_avg} from "./sort_APT";
import { display_all_teams } from "./team";


const app = express();
app.use(bodyParser.json());

app.post('/api/create_new_player', (req, res) => {
  // Call the qst1 function from the main module
  const result = new_player.create_new_player();

  // Send the result as the response
  res.json(result);
});

app.post('/api/create_new_team', (req, res) => {
  // Call the qst2 function from the main module
  const result = team.create_new_team();

  // Send the result as the response
  res.json(result);
});

app.get('/api/getPlayers', (req, res) => {
    // Call the qst3 function from the main module
    const result = summary.getPlayers();

    // Send the result as the response
    res.json(result);
    });

app.get('/api/random_team', (req, res) => {
    // Call the qst4 function from the main module
    const result = random.random_team();

    // Send the result as the response
    res.json(result);
    });

app.get('/api/sort_by_APT', (req, res) => {
    // Call the qst5 function from the main module
    const result = sort_APT.sort_by_APT();

    // Send the result as the response
    res.json(result);
    });

app.get('/api/highest_APT', (req, res) => {
    // Call the qst6 function from the main module
    const result = sort_APT.highest_APT();

    // Send the result as the response
    res.json(result);
    });

app.get('/api/lowest_avg', (req, res) => {
    // Call the qst7 function from the main module
    const result = sort_APT.lowest_avg();

    // Send the result as the response
    res.json(result);
    });

app.get('/api/display_all_teams', (req, res) => {
    const result = team.display_all_teams();

    // Send the result as the response
    res.json(result);
    });


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
