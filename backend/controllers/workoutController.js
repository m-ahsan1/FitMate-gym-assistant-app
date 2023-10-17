const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const createWorkout = async (req, res) => {
  const { title, load, reps, status } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps, status });
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
  const { id } = req.params;

  //if the id is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist " });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout does not exist" });
  }
  res.status(200).json(workout);
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
