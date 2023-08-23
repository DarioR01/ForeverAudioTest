import * as dotenv from "dotenv";
// init dotenv package
dotenv.config();

import express, { Application } from "express";
import routes from "./routes/routes";
import errorHandlerMiddleware from "./api/middlewares/errorHandlerMiddleware";
import helmet from "helmet";

// start express app
const app: Application = express();

// use the helmet library for improving security as per https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());
// disables x-powered-by for improved security against casual exploiters as per https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.disable("x-powered-by");

app.use(express.json());
routes(app);
app.use(errorHandlerMiddleware);

export default app;
