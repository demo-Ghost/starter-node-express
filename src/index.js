import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import models from './models';
import routes from './routes';

// config vars
const port = process.env.PORT || 8080;

// initialize
const app = express();

// app-level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// custom middleware
app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// routes
app.use('/users', routes.users);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
