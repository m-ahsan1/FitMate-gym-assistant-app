import React from "react";

function WorkoutCard({ title, reps, load }) {
  return (
    <div className="h-96 w-96 bg-gray-400 rounded-lg m-4">
      <div className="pt-2 ">
        Title : {title} <br />
        Reps : {reps} <br />
        Load : {load}
        <div className="flex justify-around align-bottom">
          <button className="bg-black text-white rounded-md h-14 w-24 hover:scale-105">
            Edit
          </button>
          <button className="bg-black text-white rounded-md h-14 w-24 hover:scale-105">
            Delete
          </button>
        </div>
      </div>
      <div clas></div>
    </div>
  );
}

export default WorkoutCard;
