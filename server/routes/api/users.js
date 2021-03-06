const express = require("express");
const router = express.Router();
const passport = require("passport");

const { users_services } = require("./../../services/index.js");

/*******************************************************************************************
-- Configuring User routes
*******************************************************************************************/

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", users_services.test);

// @route   GET api/users/testPrivate
// @desc    Tests users route
// @access  Private
router.get(
  "/testPrivate",
  passport.authenticate("jwt", { session: false }),
  users_services.testPrivate,
);

// @route   POST api/users/update
// @desc    Update user
// @access  Private
router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    users_services
      .updateUser(req)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  },
);

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/signup", (req, res) => {
  users_services
    .registerUser(req)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  users_services
    .loginUser(req)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// @route   POST api/users/update
// @desc    Update user
// @access  Private
router.post(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    users_services
      .logoutUser(req)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  },
);

// @route   POST api/users/refresh-token
// @desc    refresh token
// @access  Private
router.post(
  "/refresh-token",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    users_services
      .refreshToken(req)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err));
  },
);
module.exports = router;
