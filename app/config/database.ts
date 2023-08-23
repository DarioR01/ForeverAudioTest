import mysql, { QueryFunction, Pool } from "mysql";
import { promisify } from "util";
import * as dotenv from "dotenv";

dotenv.config();

interface PoolPromise extends Omit<Pool, "query"> {
	query: QueryFunction | Function;
}

// enable debug only on development environment
const debugEnabled = process.env.NODE_ENV === "development" ? true : false;

// database connection settings
export const settings = {
	connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	debug: debugEnabled,
};

// create mysql pool
export const pool: PoolPromise = mysql.createPool(settings);

// promisify query for async/ await usage
pool.query = promisify(pool.query).bind(pool);
