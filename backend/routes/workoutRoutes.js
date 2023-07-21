const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

router.get("/", (req, res) => {
  res.send("Get all woukout");
});

router.get("/:id", (req, res) => {
  res.send("Get a single workout");
});

router.post("/:id", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.send(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
  res.send("Add a woukout");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a single workout");
});

router.patch("/:id", (req, res) => {
  res.send("Update a single workout");
});

module.exports = router;
