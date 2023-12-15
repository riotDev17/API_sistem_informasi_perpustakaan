import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerDocs from '../utils/swagger.js';
import { auth } from '../routes/auth.js';
import { router } from '../routes/router.js';
import { errorMiddleware } from '../middleware/errorMiddleware.js';

export const app = express();
swaggerDocs(app, 3000);


app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth);
app.use(router);
app.use(errorMiddleware);



