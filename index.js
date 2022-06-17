require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/connectDB");
const userRouter = require("./routes/users");
const exerciseRouter = require("./routes/exercises");
const logsRouter = require("./routes/logs");

const app = express();

app.use(cors());

app.use(express.json());
// setup app to handle form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/users", userRouter);
app.use("/api/users/:id/exercises", exerciseRouter);
app.use("/api/users/:id/logs", logsRouter);
// /api/users/:_id/logs

const start = async () => {
  await connectDB();
  const listener = app.listen(process.env.PORT || 5000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
};

start();
