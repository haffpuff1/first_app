import * as express from 'express';
import * as bodyParser from 'body-parser';

// import * as main from './main';

const app = express();
app.use(bodyParser.json());

app.post('/api/qst1', (req, res) => {
  // Call the qst1 function from the main module
//   const result = main.qst1();

//   // Send the result as the response
//   res.json(result);
console.log('here')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
