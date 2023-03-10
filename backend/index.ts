import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { dbClient } from './src/database/client';
import { localDbServer } from './src/database/local-server';

const router: Router = require('./src/routes/routes');

dotenv.config();

const initialize = async () => {
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    await localDbServer.initialize();
  }
  await dbClient.connect();
};

const shutdown = async () => {
  await dbClient.disconnect();
  if (process.env.NODE_ENV !== 'PRODUCTION') await localDbServer.shutdown();
  process.exit(0);
};

process.on('SIGINT', () => {
  shutdown();
});

initialize().catch(err => {
  process.exit(1);
});

const app: Express = express();
const port = process.env.PORT;

app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
