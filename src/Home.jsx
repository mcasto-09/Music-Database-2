import { useState, useEffect } from "react";

const clientId = "16c1c7c9d87e492f8cf8157434888f45";
const clientSecret = "5f69798fd8d04affa00c37f3aa0e0e22";

function AllMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
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
  }, []);

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
          console.log(data);
        })
        .catch((error) => console.error("Error fetching albums:", error));
    }
  }
  const handleLike = (id) => {
    fetch(`http://localhost:8000/albums/${id}/like`, { method: "POST" })
      .then((response) => response.json())
      .then((updatedAlbum) => {
        setAlbums(albums.map(album => album.id === id ? updatedAlbum : album));
      })
      .catch((error) => console.error("Error liking album:", error));
  };

  const handleDislike = (id) => {
    fetch(`http://localhost:8000/albums/${id}/dislike`, { method: "POST" })
      .then((response) => response.json())
      .then((updatedAlbum) => {
        setAlbums(albums.map(album => album.id === id ? updatedAlbum : album));
      })
      .catch((error) => console.error("Error disliking album:", error));
  };

  return (
    <div className="bg-gradient-to-b from-yellow-200 via-65% via-sky-200 to-white">
      <img className=" object-cover object-bottom pb-12" src="./images/music border.png" alt="music notes" />
      <div className="font-display text-center text-5xl pb-2 mt-10">
        <h1>The Music Database</h1>
      </div>
      <div className="flex justify-center font-display text-center text-3xl border-solid border-2 w-[25rem] mx-auto ">
        <input
          placeholder="search"
          type="input"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              search();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <div className="mt-10">
        {albums.length > 0 ? (
          <ul>
            {albums.map((album, index) => (
              <li key={album.id} className="mb-4 text-center text-2xl">
                <p>{album.name}</p>
                <button onClick={() => handleLike(index)} className="mr-2 bg-green-200 p-1 rounded">
                  Like ({album.likes})
                </button>
                <button onClick={() => handleDislike(index)} className="bg-red-200 p-1 rounded">
                  Dislike ({album.dislikes})
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-2xl">No albums found.</p>
        )}
      </div>
    </div>
  );
}

export default AllMusic;
