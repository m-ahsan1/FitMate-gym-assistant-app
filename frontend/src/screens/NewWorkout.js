import React from "react";

function NewWorkout() {
  return (
    <div className="bg-black text-white">
      <form className="flex flex-col items-center justify-center">
        <label>
          Workout Title:
          <input type="text" />
        </label>
        <label>
          Load (kg):
          <input type="text" />
        </label>
        <label>
          Reps:
          <input type="text" />
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
