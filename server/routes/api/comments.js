const express = require("express");
const router = express.Router();
const passport = require("passport");

const { comments_services } = require("./../../services/index.js");

/*******************************************************************************************
-- Configuring Comment routes
*******************************************************************************************/

// @route   GET api/comments/test
// @desc    Tests comments route
// @access  Public
router.get("/test", comments_services.test);

// @route   GET api/comments/testPrivate
// @desc    Tests comments route
// @access  Private
router.get(
  "/testPrivate",
  passport.authenticate("jwt", { session: false }),
  comments_services.testPrivate
);

router.post(
  "/add/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    comments_services
      .addComment(req)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  }
);

module.exports = router;
