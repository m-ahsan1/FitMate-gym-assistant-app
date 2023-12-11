import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-black text-white h-14 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl ml-2">Application Tracker</h1>
      </div>
      <ul className="hidden md:flex gap-3">
        <li className="hover:scale-105 duration-300">
          <Link to="/">Workouts</Link>
        </li>
        <li className="hover:scale-105 duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <Popup
          trigger={
            <button className="bg-white rounded-full text-black w-[150px] h-[30px] mx-10">
              Create Application
            </button>
          }
          position="center"
        ></Popup>
      </ul>
    </div>
  );
}

export default Nav;
