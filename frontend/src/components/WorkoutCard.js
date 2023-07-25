import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutCard({ id, title, reps, load }) {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/api/workouts/" + id, {
      method: "DELETE",
    });
    const json = await res.json();
    dispatch({
      type: "DELETE_WORKOUT",
      payload: json,
    });
  };

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
          <button
            className="bg-black text-white rounded-md h-14 w-24 hover:scale-105"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
      <div clas></div>
    </div>
  );
}

export default WorkoutCard;
