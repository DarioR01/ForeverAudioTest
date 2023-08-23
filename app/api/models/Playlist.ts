import { pool } from "../../config/database";
import { PlaylistDetailsI, PlaylistRequestI } from "../interfaces/playlists";
import StatusError from "../../utilities/StatusError";

export default class PlaylistModel {
  /**
   * Save new playlist into the database
   *
   * @param playlistDetails
   * @returns last insert
   */
  public async save(playlistDetails: PlaylistRequestI): Promise<number> {
    try {
      const results = await pool.query(
        `
          INSERT INTO playlists 
          SET datetime_created = NOW(), ?`,
        {
          title: playlistDetails.title,
          description: playlistDetails.description,
        }
      );

      return results.insertId;
    } catch (err: any) {
      throw new StatusError("Failed to save a new playlist.", 500);
    }
  }

  /**
   * Get playlist details from database by playlist ID
   * @param id
   * @returns
   */
  public async getPlaylistById(id: number): Promise<PlaylistDetailsI> {
    try {
      const results = await pool.query(
        `SELECT id, title, description, datetime_created FROM playlists WHERE id =? `,
        id
      );

      let formattedResults: PlaylistDetailsI[] = Object.values(
        JSON.parse(JSON.stringify(results))
      );

      if (!formattedResults[0])
        throw new StatusError(
          "Playlist with id: ${id} could not be found",
          404
        );

      return formattedResults[0];
    } catch (err: any) {
      throw err;
    }
  }
}
