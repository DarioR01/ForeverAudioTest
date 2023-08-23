import { NextFunction, Request, Response } from "express";
import { PlaylistRequestI } from "../interfaces/playlists";
import StatusError from "../../utilities/StatusError";

/**
 * Playlist generator validator
 */
export const playlistPostMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
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
    throw new StatusError(
      `Invalid Request. Given value: ${content} for ${paramKey} is invalid`,
      400
    );
  }

  if (content.length > characterLimit) {
    throw new StatusError(
      `Invalid Request. Value for ${paramKey} is exceeds maximum character limit of ${characterLimit}`,
      400
    );
  }
}

/**
 * Playlist get validator
 * Checks if route id parameter is valid
 */
export const playlistGetMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.id;

    /* throws an error if id is not a number*/
    if (isNaN(Number(id))) {
      throw new StatusError(
        `Invalid Request. Value:${id} for id is not a number`,
        400
      );
    }

    const intId: number = parseInt(id);

    /* throws an error if id is not an integer*/
    if (!Number.isInteger(intId)) {
      throw new StatusError(
        `Invalid Request. Value: ${intId} for id is not an integer value`,
        400
      );
    }

    /* throws an error if id is not in the range of INT Autoincrement as for https://dev.mysql.com/doc/refman/8.0/en/integer-types.html*/
    if (intId < 1 || intId > 2147483647) {
      throw new StatusError(
        `Invalid Request. Value:${id} for id is not in range 1 <= id <= 2147483647`,
        400
      );
    }

    next();
  } catch (err) {
    next(err);
  }
};
