"use strict";
// import express from 'express';
// import { Express } from 'express';
// import * as bodyParser from 'body-parser';
// import { create_new_player } from './new_player';
// import { create_new_team } from './team';
// import { getPlayers } from './summary'; 
// import {random_team} from './random';
// import {sort_by_APT} from './sort_APT';
// import {highest_APT} from './sort_APT';
// import {lowest_avg} from './sort_APT';
// // import * as main from './main';
// const app:Express = express();
// app.use(bodyParser.json());
// app.post('/api/getPlayers',(req:express.Request, res:express.Response) => {
//   // Call the getPlayers function from the main module
//   const result = getPlayers();
//   // Send the result as the response
//   res.json(result);
// });
// app.post('/api/random_team', (req:express.Request, res:express.Response) => {
//   // Call the random_team function from the main module
//   const result = random_team();
//   // Send the result as the response
//   res.json(result);
// });
// app.post('/api/sort_by_APT', (req:express.Request, res:express.Response)=> {
//   // Call the sort_by_APT function from the main module
//   const result = sort_by_APT();
//   // Send the result as the response
//   res.json(result);
// });
// app.post('/api/highest_APT', (req:express.Request, res:express.Response) => {
//   // Call the highest_APT function from the main module
//   const result = highest_APT();
//   // Send the result as the response
//   res.json(result);
// });
// app.post('/api/lowest_avg',lowest_avg , (req:express.Request, res:express.Response)=> {
//   // Call the lowest_avg function from, the main module
//   const result = lowest_avg();
//   // Send the result as the response
//   res.json(result);
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
