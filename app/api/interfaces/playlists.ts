/**
 * Interface for create playlist details object
 */
export interface PlaylistRequestI {
	title: string;
	description: string;
}

/**
 * Interface for playlist details object
 */
export interface PlaylistDetailsI extends PlaylistRequestI {
	id: number;
	datetime_created: string;
}
