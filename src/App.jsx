import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {


  return (
    <div className="bg-white" >
    <header className="flex justify-center space-x-96  pt-2 pb-2 text-lg">
    <Link to="/information">
          <p>Discover</p>
    </Link>
    <Link to="/home">
        <p>Home</p>
    </Link>
    </header>
    <Outlet />
    </div>
  );
}

export default App;
