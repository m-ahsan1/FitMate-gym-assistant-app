import React, { useState } from "react";
import { useEffect } from "react";
import WorkoutCard from "../components/WorkoutCard";
import NewWorkout from "../components/NewWorkout";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import "reactjs-popup/dist/index.css";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
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

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch("http://localhost:4000/api/workouts/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedDocument = await response.json();
        console.log("Document updated successfully", updatedDocument);
        // Handle the updated data in your React component's state or UI as needed.
      } else {
        console.error("Error updating document");
      }
    } catch (error) {
      console.error("Error updating document", error);
    }
  };
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let id = workouts[source.index]._id;
    let active = workouts[source.index];
    if (source.droppableId === "active") {
      //update workout and put value as null in the database

      active.status = "null";
      handleUpdate(id, active);
    } else {
      active.status = "null";
      handleUpdate(id, active);
    }

    if (destination.droppableId === "active") {
      active.status = "active";
      handleUpdate(id, active);
    } else {
      active.status = "completed";
      handleUpdate(id, active);
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
                    {workout.status === "active" ? (
                      <WorkoutCard
                        index={index}
                        id={workout._id}
                        title={workout.title}
                        reps={workout.reps}
                        load={workout.load}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                ))}

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
              {workouts &&
                workouts.map((workout, index) => (
                  <div key={workout._id}>
                    {workout.status === "completed" ? (
                      <WorkoutCard
                        index={index}
                        id={workout._id}
                        title={workout.title}
                        reps={workout.reps}
                        load={workout.load}
                      />
                    ) : (
                      <></>
                    )}
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
