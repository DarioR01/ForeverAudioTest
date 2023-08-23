import { PlaylistDetailsI, PlaylistRequestI } from "../interfaces/playlists";
import PlaylistModel from "../models/Playlist";

export default class PlaylistRepository {
	protected playlistModel: PlaylistModel;

	constructor() {
		this.playlistModel = new PlaylistModel();
	}

	/**
	 * Create  anew playlist in the database
	 * and playlist details
	 * @param playlistDetails
	 * @returns
	 */
	public async createPlaylist(
		playlistDetails: PlaylistRequestI
	): Promise<PlaylistDetailsI> {
		const playlistId = await this.playlistModel.save(playlistDetails);
		const details = await this.playlistModel.getPlaylistById(playlistId);

		return details;
	}
}
