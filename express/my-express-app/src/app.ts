import express from 'express';
import path from 'path';
import { Request, Response } from './types';

import { IndexController } from './controllers';

const app = express();
const port = 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set up routes
const indexController = new IndexController();

app.get('/', indexController.getIndex);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});