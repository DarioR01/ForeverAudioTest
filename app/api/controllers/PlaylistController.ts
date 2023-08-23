import { NextFunction, Request, Response } from "express";
import { PlaylistRequestI } from "../interfaces/playlists";
import PlaylistRepository from "../repositories/PlaylistRepository";

export default class PlaylistController {
  private playlistRepository: PlaylistRepository;

  /**
   * Playlist Controller constructor
   */
  constructor() {
    // create an instance of PlaylistRepository class
    this.playlistRepository = new PlaylistRepository();
  }

  /**
   * Create new playlist
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      // add request body params to the new variable
      const params: PlaylistRequestI = req.body;

      // create new playlist
      const playlistDetails = await this.playlistRepository.createPlaylist(
        params
      );

      // return response containing playlist details
      return res.json({
        playlist: playlistDetails,
        params: params,
      });
    } catch (err: any) {
      next(err);
    }
  }

  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      // get playlist id from params and converts it to integer
      const id: number = parseInt(req.params.id);

      // fetch playlist by id
      const playlistDetails = await this.playlistRepository.getPlaylist(id);

      // return response containing playlist details in JSON format
      return res.json({
        ...playlistDetails,
      });
    } catch (err: any) {
      next(err);
    }
  }
}
