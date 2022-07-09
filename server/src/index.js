import express from 'express';
import { initDb } from './config/db.js';
import { routes } from './config/routes.js';
import { PORT } from './constants.js';
const app = express();

app.use('/api', routes);

async function main() {
  await initDb();
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}

main();
