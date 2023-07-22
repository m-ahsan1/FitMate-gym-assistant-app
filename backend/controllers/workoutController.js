const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const getAllWorkout = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
  const id = req.params;
  const workout = Workout.findById({ id });

  //if the id is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist " });
  }

  if (!workout) {
    return res.status(404).json({ error: "Workout does not exist" });
  }
  res.status(200).json(workout);
};
module.exports = { createWorkout, getAllWorkout, getWorkout };
