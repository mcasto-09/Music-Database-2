import express from "express";
import ViteExpress from "vite-express";
import session from 'express-session'
import appRouter from "./routes/index.js";
import musicRouter  from "./routes/music.routes.js"

const app = express();
const port = '8000'

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(appRouter)
app.use(session({
  secret: 'shh',
  saveUninitialized: true,
  resave: false
}))


app.get("/favorite-song", (req, res) => {
  res.send("Hello Vite + React!"); //send from api to send to front end
});

ViteExpress.listen(app, 8000, () =>
  console.log("Server is listening on http://localhost:8000"),
);

app.use('/music', musicRouter)
