import { Application } from "express";
import indexRoutes from "./index";
import playlistRoutes from "./playlist";

export = (app: Application) => {
	app.use("/playlists", playlistRoutes);
	app.use("/", indexRoutes);
};
