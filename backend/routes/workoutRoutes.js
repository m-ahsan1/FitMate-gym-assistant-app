const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
} = require("../controllers/workoutController");

router.get("/", getAllWorkout);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.send("Delete a single workout");
});

router.patch("/:id", (req, res) => {
  res.send("Update a single workout");
});

module.exports = router;
