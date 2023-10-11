import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Draggable } from "react-beautiful-dnd";

function WorkoutCard({ index, id, title, reps, load }) {
  const { dispatch } = useWorkoutsContext();

  const handleEdit = async () => {
    const res = await fetch("http://localhost:4000/api/workouts/" + id, {
      method: "EDIT",
    });
    const json = await res.json();
    dispatch();
  };

  const handleDelete = async () => {
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
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="w-96 h-52 bg-black rounded-3xl m-4 text-white hover:scale-105 duration-300"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-5xl mt-1">{title}</div>
            <div className="text-1xl">
              Reps : {reps} <br />
              Load : {load}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-white text-black text-lg rounded-full h-14 w-24 hover:scale-105"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-white text-black text-lg rounded-full h-14 w-24 hover:scale-105"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default WorkoutCard;
