import express, { Request, Response } from "express";
import {
  playlistPostMiddleware,
  playlistGetMiddleware,
} from "../api/middlewares/playlistMiddleware";
import PlaylistController from "../api/controllers/PlaylistController";
const router = express.Router();

const playlistController = new PlaylistController();

/**
 * Create a new playlist in the database
 */
router.post(
  "/",
  playlistPostMiddleware,
  playlistController.create.bind(playlistController)
);

router.get(
  "/:id",
  playlistGetMiddleware,
  playlistController.get.bind(playlistController)
);

export default router;
