const express = require("express");
const router = express.Router();

const { users_services } = require("./../../services/index.js");

/*******************************************************************************************
-- Configuring User routes
*******************************************************************************************/

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", users_services.test);

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

module.exports = router;
