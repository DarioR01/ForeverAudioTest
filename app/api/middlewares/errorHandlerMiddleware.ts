import { NextFunction, Request, Response } from "express";
import StatusError from "../../utilities/StatusError";

/**
 * Playlist generator validator
 */
export default (
  error: StatusError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(error.status).send(error.message);
};
