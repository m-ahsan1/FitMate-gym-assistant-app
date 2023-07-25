import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-black text-white h-14 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl ml-2">Fitmate</h1>
      </div>
      <ul className="hidden md:flex gap-3">
        <li className="hover:scale-105 duration-300">
          <Link to="/">Workouts</Link>
        </li>
        <li className="hover:scale-105 duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
