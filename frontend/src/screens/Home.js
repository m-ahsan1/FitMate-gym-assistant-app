import React from "react";
import { useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import NewWorkout from "../components/NewWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    //fetch data from api https://localhost:4000/api/workouts
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const json = await res.json();
      if (res.ok) {
        dispatch({
          type: "GET_WORKOUTS",
          payload: json,
        });
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="font-Mynerve text-3xl font-semibold flex flex-wrap">
      {workouts &&
        workouts.map((workout) => (
          <div key={workout._id}>
            <WorkoutCard
              id={workout._id}
              title={workout.title}
              reps={workout.reps}
              load={workout.load}
            />
          </div>
        ))}
      <NewWorkout />
    </div>
  );
}

export default Home;
