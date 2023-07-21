const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all woukout");
});

router.get("/:id", (req, res) => {
  res.send("Get a single workout");
});

router.post("/:id", (req, res) => {
  res.send("Add a woukout");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a single workout");
});

router.patch("/:id", (req, res) => {
  res.send("Update a single workout");
});

module.exports = router;
