const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

router.get("/", getAllWorkout);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
