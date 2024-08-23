import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

const clientId = "16c1c7c9d87e492f8cf8157434888f45";
const clientSecret = "5f69798fd8d04affa00c37f3aa0e0e22";


function AllMusic() {
  const [searchInput, setSearchInput] = useState("")
  const [accessKey, setAccessKey] = useState ("")

  useEffect(() => {
    let authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
    }
    fetch('https://accounts.spotify.com/api/token', authParams)
      .then(result => result.json())
      .then(data => setAccessKey(data.accessKey))
  }, [])

  

  return (
    <div className="bg-gradient-to-b from-yellow-200 via-65% via-sky-200 to-white">
      <img
      className="h-30 w-full object-cover object-bottom pb-12"
      src="./images/music border.png"
      alt="music notes"
      />
      <div className="font-display text-center text-4xl pb-4 mt-10">
        <h1>The Music Database</h1>
      </div>
      <div className="flex justify-center font-display text-center text-lg border-solid border-2 w-[25rem] mx-auto bg-gradient-to-r from-yellow-200 to-blue-300">
        <input className="w-full" type="text" placeholder="search..." name="search" />
        {/* <FaSearch button onClick={event => console.log("clicked")} /> */}
      </div>
    </div>
  );
  
}

export default AllMusic;