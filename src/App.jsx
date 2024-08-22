import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {


  return (
    <div className="bg-white" >
    <header>
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
