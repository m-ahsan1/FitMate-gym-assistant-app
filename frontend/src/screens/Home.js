import React from "react";
import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import NewWorkout from "./NewWorkout";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    //fetch data from api https://localhost:4000/api/workouts
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const json = await res.json();
      if (res.ok) {
        setWorkouts(json);
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
