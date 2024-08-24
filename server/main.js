import express from "express";
import ViteExpress from "vite-express";
import session from 'express-session';
// import appRouter from "./routes/index.js";
import { AlbumDb } from '../models/index.js'
import Album from '../models/AlbumDb.js'

const app = express();
const port = '8000';



app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
  secret: 'shh',
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