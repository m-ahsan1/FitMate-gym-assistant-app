const express = require("express");
const router = express.Router();
const Application = require("../models/applicationModel");
const {
  createApplication,
  getAllApplication,
  getApplication,
} = require("../controllers/applicationController");

router.get("/", getAllApplication);

router.get("/:id", getApplication);

router.post("/", createApplication);
module.exports = router;
