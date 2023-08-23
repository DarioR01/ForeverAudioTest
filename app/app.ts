import * as dotenv from "dotenv";

// init dotenv package
dotenv.config();

import express, { Application } from "express";
import routes from "./routes/routes";

// start express app
const app: Application = express();

app.use(express.json());
routes(app);

export default app;
