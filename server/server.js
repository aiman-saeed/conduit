const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const user = require("./routes/api/users");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongooDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("<h3>Conduit.<h3>"));

// Use Routes
app.use("/api/users", user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
