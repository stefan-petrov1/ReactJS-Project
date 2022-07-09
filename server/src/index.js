import express from 'express';
import { initDb } from './config/db.js';
import { routes } from './config/routes.js';
import { PORT } from './constants.js';
import { apiErrorMiddleware } from './middlewares/apiErrorMiddleware.js';
import { sessionMiddleware } from './middlewares/sessionMiddleware.js';
const app = express();

app.use(express.json());
app.use(sessionMiddleware);
app.use('/api', routes);

app.use(apiErrorMiddleware);

async function main() {
  await initDb();
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}

main();
