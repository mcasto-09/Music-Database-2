import express from 'express';
import ViteExpress from 'vite-express';
import session from 'express-session';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
// import Album from '../models/AlbumDb.js';
import config from '../config/config.json' with {type: 'json'}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const configPath = path.join(__dirname, '../config/config.json');

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const app = express();
const port = config.development.port || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
  secret: config.development.sessionSecret || 'your-secret-key',
  saveUninitialized: true,
  resave: false
}));

app.get('/albums', async (req, res) => {
  const albums = await Album.findAll();
  res.json(albums);
});

app.get('/album/:id', async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (album) {
      res.json(album);
    } else {
      res.status(404).send('Album not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.post('/albums/:id/like', async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  if (album) {
    album.likes += 1;
    await album.save();
    res.json(album);
  } else {
    res.status(404).send('Album not found');
  }
});

app.post('/albums/:id/dislike', async (req, res) => {
  const album = await Album.findByPk(req.params.id);
  if (album) {
    album.dislikes += 1;
    await album.save();
    res.json(album);
  } else {
    res.status(404).send('Album not found');
  }
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);