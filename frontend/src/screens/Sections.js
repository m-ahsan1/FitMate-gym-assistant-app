import React from "react";
import WorkoutCard from "../components/WorkoutCard";
import NewWorkout from "../components/NewWorkout";

function Sections({ workouts }) {
  return (
    <div className="h-screen flex flex-row justify-around">
      <div className="font-Railway text-3xl font-semibold flex flex-wrap"></div>

      <div>Completed Workouts</div>
    </div>
  );
}

export default Sections;
