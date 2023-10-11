import React, { useState } from "react";
import { useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import NewWorkout from "../components/NewWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  const [CompletedWorkouts, setCompletedWorkouts] = useState([]);

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

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = workouts,
      completed = CompletedWorkouts;

    if (source.droppableId === "active") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "active") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen flex flex-row justify-around">
        <Droppable droppableId="active">
          {(provided) => (
            <div
              className="font-Railway text-3xl font-semibold flex flex-col w-1/2 bg-slate-400"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1>Active Workouts</h1>
              {workouts &&
                workouts.map((workout, index) => (
                  <div key={workout._id}>
                    <WorkoutCard
                      index={index}
                      id={workout._id}
                      title={workout.title}
                      reps={workout.reps}
                      load={workout.load}
                    />
                  </div>
                ))}
              ,
              <NewWorkout />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completed">
          {(provided) => (
            <div
              className="font-Railway text-3xl font-semibold flex flex-col  w-1/2 bg-orange-300"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1>Completed Workouts</h1>
              {CompletedWorkouts &&
                CompletedWorkouts.map((workout, index) => (
                  <div key={workout._id}>
                    <WorkoutCard
                      index={index}
                      id={workout._id}
                      title={workout.title}
                      reps={workout.reps}
                      load={workout.load}
                    />
                  </div>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Home;
