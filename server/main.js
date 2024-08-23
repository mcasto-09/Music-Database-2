import express from "express";
import ViteExpress from "vite-express";
import session from 'express-session';
import appRouter from "./routes/index.js";
import musicRouter from "./routes/music.routes.js";

const app = express();
const port = '8000';

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(appRouter);
app.use(session({
  secret: 'shh',
  saveUninitialized: true,
  resave: false
}));


// Use the music router for music-related routes
app.use('/music', musicRouter);


ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`),
);