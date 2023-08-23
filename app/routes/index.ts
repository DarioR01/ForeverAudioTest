import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
	res.send("Server for backend test is running.");
});

export default router;
