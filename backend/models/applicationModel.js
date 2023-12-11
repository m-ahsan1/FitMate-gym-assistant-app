const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    companyTitle: {
      type: String,
      required: true,
    },
    applicationDate: {
      type: String,
      required: true,
    },
    applicationStatus: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
