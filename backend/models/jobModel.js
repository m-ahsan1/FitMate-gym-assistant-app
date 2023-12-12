const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company_name: String,
  location: String,
  via: String,
  description: String,
  job_highlights: [
    {
      title: String,
      items: [String],
    },
  ],
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
