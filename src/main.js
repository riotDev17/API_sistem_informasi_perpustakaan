import { app } from './app/app.js';
import { logger } from './app/logger.js';
// import swaggerDocs from './utils/swagger.js';

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
  // swaggerDocs(web , PORT);
});