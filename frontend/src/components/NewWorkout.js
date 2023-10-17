import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function NewWorkout() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //POST data to

    setStatus("active");
    const res = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, reps, load, status }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
      console.log(error);
    } else {
      dispatch({
        type: "CREATE_WORKOUT",
        payload: json,
      });
      setError(null);
      console.log("New workout added.");
      setLoad("");
      setReps("");
      setTitle("");
    }
  };

  return (
    <div className="">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label>
          Workout Title:
          <input
            className="bg-gray-200 rounded-md focus:bg-white focus:border-purple-500"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Load (kg):
          <input
            className="bg-gray-200 rounded-md focus:bg-white focus:border-purple-500"
            type="text"
            name="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </label>
        <label>
          Reps:
          <input
            className="bg-gray-200 rounded-md focus:bg-white focus:border-purple-500"
            type="text"
            name="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </label>

        <button
          className="bg-black rounded-2xl text-white h-14 w-34"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewWorkout;
