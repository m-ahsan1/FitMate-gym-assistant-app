require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const woukoutRoutes = require("./routes/workoutRoutes");

const app = express();

app.use("/api/workouts", woukoutRoutes);

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
