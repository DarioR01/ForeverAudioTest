import express, { Request, Response } from "express";
import playlistMiddleware from "../api/middlewares/playlistMiddleware";
import PlaylistController from "../api/controllers/PlaylistController";
const router = express.Router();

const playlistController = new PlaylistController();

/**
 * Create a new playlist in the database
 */
router.post(
	"/",
	playlistMiddleware,
	playlistController.create.bind(playlistController)
);

export default router;
