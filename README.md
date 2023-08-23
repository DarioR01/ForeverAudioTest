# Forever Audio - Backend Test using NodeJS, Express JS and Typescript

## Requirements

- `npm: v9.5.1`
- `node: v18.16`
- `Postman` to access and test API
- `A MySQL database management software` such as `Sequel Pro` or `Table Plus` or any other you prefer
- `Docker and Docker Compose`

```
Docker and Docker Compose is required to run the MySQL database container. Easiest way is to download Docker for Desktop from https://www.docker.com/products/docker-desktop/ and follow installation guide.
```

## Installation Guide

1. In the root directory of the project run `docker-compose up -d`. -d is short for the --detach option. Docker detaches the container process and run it in the background.
2. In the root directory of the project create: `.env` file. Copy and paste the content from env-example into this file.
3. In the root directory of the project run: `npm install`.
4. In the root directory of the project run: `npm run dev` to start the local development. If everything is okay you should see a message in the terminal `Server is running on port 8000` alternatively if you visit http://localhost:8000 in the browser you should see `Server for backend is running.`
5. Create new workspace in Postman https://www.postman.com/ and import [FA_API_Backend_Test_Postman_Collection.json](FA_API_Backend_Test_Postman_Collection.json). You should see API collection containing `Create a Playlist` endpoint.

### MySQL Database management software configuration

- Host: 127.0.0.1
- User: root
- Password: root
- Port: 3306
- Database name: test_db
- SSL Mode: REQUIRED

## API Reference

#### Create a playlist

Create a playlist endpoint has been implemented, it can be accessed via a POST request method. See below endpoint details including body parameters required to create a new playlist.

```
  POST /playlists
```

| Parameter     | Type     | Description                        |
| :------------ | :------- | :--------------------------------- |
| `title`       | `string` | **Required**. Playlist Title       |
| `description` | `string` | **Required**. Playlist Description |

#### Get a playlist

Get playlist endpoint has been implemented, it can be accessed via a GET request method. See Below details

```
  GET /playlists/:id
```

| Parameter | Type     | Description                                             |
| :-------- | :------- | :------------------------------------------------------ |
| `id`      | `number` | **Required**. An integer value between 1 and 2147483647 |
