require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const applicationRoutes = require("./routes/applicationRoutes");
const cors = require("cors");
const JobModel = require("./models/jobModel");

const { getJson } = require("serpapi");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

app.use("/api/applications", applicationRoutes);

app.get("/api/jobs/", async (req, res) => {
  try {
    // Call getJson function with the specified parameters
    getJson(
      {
        engine: "google_jobs",
        q: "software engineer",
        hl: "en",
        chips: "job_family_1:frontend developer,job_family_1:team member",
        api_key:
          "04ec59c9ebdef266f014b34e47d48e246331b3fd784f0088a32ffab9eb9852a3",
      },
      async (json) => {
        // Assuming json["jobs_results"] contains an array of jobs
        const jobsFromApi = json["jobs_results"];

        // Store the jobs in the MongoDB database using Mongoose
        await JobModel.insertMany(jobsFromApi);

        // Send the jobs as a response to the frontend
        res.json({ jobs: jobsFromApi });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //success
    app.listen(process.env.PORT, () => {
      console.log("DB Connected...");
      console.log("listening to PORT", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
