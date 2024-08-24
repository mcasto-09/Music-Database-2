import { AlbumDb } from "./models/index.js";
import db from "./db.js";

console.log("syncing db")
await db.sync({force: true})
console.log("seeding db")

const albumData = [
    {
    name: "dummy",
    likes: 0,
    dislikes: 0,
    },
]

const contentId = await Promise.all(
    albumId.map((album) => {
        const {name, likes, dislikes} = album

        const newAlbum = album.create({
            name: "dummy",
            likes: 0,
            dislikes: 0,
        })
        return newAlbum
    })
)

console.log(contentId)

const getSpotify = () => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((res) => res.json())
      .then((data) => setAccessKey(data.access_token)); 
      //all search stuff goes here
};

  async function search() {
    console.log("Search for " + searchInput); // Nirvana

    let searchParam = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessKey,
      },
    };

    let artistId = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", searchParam)
      .then((response) => response.json())
      .then((data) => {
        if (data.artists.items.length > 0) {
          return data.artists.items[0].id;
        } else {
          throw new Error("No artist found");
        }
      })
      .catch((error) => console.error(error));

    if (artistId) {
      console.log("Artist ID = " + artistId);

      let albumsReturn = await fetch(
        "https://api.spotify.com/v1/artists/" + artistId + "/albums?include_groups=album,single&market=US&limit=50",
        searchParam
      )
        .then((response) => response.json())
        .then((data) => {
          setAlbums(data.items.map(album => ({ ...album, likes: 0, dislikes: 0 })));
          console.log(data); //put up to here in javascript, have it create a new album into the db
        })
        .catch((error) => console.error("Error fetching albums:", error));
    }
  }

await db.close()
console.log("finished seeding database")

