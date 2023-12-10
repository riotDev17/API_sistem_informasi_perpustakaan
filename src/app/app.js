import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { auth } from '../routes/auth.js';
import { router } from '../routes/router.js';
import { errorMiddleware } from '../middleware/errorMiddleware.js';

export const app = express();

app.use(cors({
  origin: '*',
  credentials: true,
}));


app.use(cookieParser());
app.use(bodyParser.json());
app.use(auth);
app.use(router)
app.use(errorMiddleware);



