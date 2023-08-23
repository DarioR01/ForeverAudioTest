import { NextFunction, Request, Response } from "express";
import { PlaylistRequestI } from "../interfaces/playlists";

/**
 * Playlist generator validator
 */
export default (req: Request, _res: Response, next: NextFunction) => {
	try {
		const params: Partial<PlaylistRequestI> = req.body;

		// Validate playlist request object
		validatePlaylistDetails("title", params.title);
		validatePlaylistDetails("description", params.description, 200);

		next();
	} catch (err) {
		next(err);
	}
};

/**
 * Check if the playlist details are valid
 *
 * @param title
 */
function validatePlaylistDetails(
	paramKey: "title" | "description",
	content?: string,
	characterLimit: number = 100
): void {
	if (!content) {
		throw new Error(
			`Invalid Request. Given value: ${content} for ${paramKey} is invalid`
		);
	}

	if (content.length > characterLimit) {
		throw new Error(
			`Invalid Request. Value for ${paramKey} is exceeds maximum character limit of ${characterLimit}`
		);
	}
}
