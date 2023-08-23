import * as dotenv from "dotenv";
// init dotenv package
dotenv.config();

import express, { Application } from "express";
import routes from "./routes/routes";
import errorHandlerMiddleware from "./api/middlewares/ErrorHandlerMiddleware";

// start express app
const app: Application = express();

app.use(express.json());
routes(app);
app.use(errorHandlerMiddleware);

export default app;
