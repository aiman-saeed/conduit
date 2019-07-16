const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/api/users");
const article = require("./routes/api/articles");

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

// Passport middleware for Auth Header Validation
app.use(passport.initialize());

// Passport Config for Auth Header Validation
require("./config/passport")(passport);

// Hello Server route
app.get("/", (req, res) => res.send("<h3>Welcome to Conduit Server.<h3>"));

// Use Routes
app.use("/api/users", user);
app.use("/api/articles", article);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
