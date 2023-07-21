const express = require(`express`);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contentsRoutes = require("./routes/contents");
const HttpError = require("./models/http-error");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/contents", contentsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("경로를 찾을 수 없습니다.", 404);
  throw error;
});

mongoose
  .connect(
    `mongodb+srv://joshua:1q2w3e4r@cluster0.4zvbbqp.mongodb.net/mern?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
    console.log("connected");
  })
  .catch((err) => console.log(err));
