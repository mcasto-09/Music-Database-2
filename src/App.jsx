import { useState } from "react";
import { Link } from "react-router-dom";
import musicRouter from "../server/routes/music.routes";

function App() {


  return (
    <div className="bg-gradient-to-b from-yellow-200 via-65% via-sky-200 to-white " >
      <div className="font-display p-2 text-xl bg-white">
        <p Link to="allMusic">Discover</p>
      </div>
      <div className='font-display text-center pt-60 text-4xl pb-4'>
        <h1>The Music Database </h1>
      </div>
      <div className="flex justify-center font-display text-center text-lg border-solid border-2 w-[25rem] mx-auto bg-gradient-to-r from bg-yellow-200 to-blue-300" >
      <input className="w-full" type="text" placeholder="search..." name="search"></input>
    </div>
    </div>
  );
}

export default App;
