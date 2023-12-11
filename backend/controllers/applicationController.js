const Application = require("../models/applicationModel");
const mongoose = require("mongoose");

const createApplication = async (req, res) => {
  const { jobTitle, companyTitle, applicationDate, applicationStatus, notes } =
    req.body;
  try {
    const application = await Application.create({
      jobTitle,
      companyTitle,
      applicationDate,
      applicationStatus,
      notes,
    });
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const getAllApplication = async (req, res) => {
  const applications = await Application.find({});
  res.status(200).json(applications);
};

const getApplication = async (req, res) => {
  const { id } = req.params;

  //if the id is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Application does not exist " });
  }
  const application = await Application.findById(id);

  if (!application) {
    return res.status(404).json({ error: "Application does not exist" });
  }
  res.status(200).json(application);
};

module.exports = {
  createApplication,
  getAllApplication,
  getApplication,
};
