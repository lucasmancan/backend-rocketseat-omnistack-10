const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(routes);

mongoose.connect(
  "mongodb+srv://lucasmancan:root@cluster0-khw4f.mongodb.net/test?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  console.log(req.query);
  res.json({ message: "Hello World!" });
});

app.listen(3333);
