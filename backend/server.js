require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const woukoutRoutes = require("./routes/workoutRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const cors = require("cors");

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

app.use("/api/workouts", woukoutRoutes);
app.use("/api/applications", applicationRoutes);

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
