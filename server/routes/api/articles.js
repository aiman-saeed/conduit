const express = require("express");
const router = express.Router();
const passport = require("passport");

const { articles_services } = require("./../../services/index.js");

/*******************************************************************************************
-- Configuring Article routes
*******************************************************************************************/

// @route   GET api/articles/test
// @desc    Tests articles route
// @access  Public
router.get("/test", articles_services.test);

// @route   GET api/articles/testPrivate
// @desc    Tests articles route
// @access  Private
router.get(
  "/testPrivate",
  passport.authenticate("jwt", { session: false }),
  articles_services.testPrivate
);

// @route   POST api/articles/add
// @desc    Tests articles route
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articles_services
      .addArticle(req)
      .then(article => res.json(article))
      .catch(err => res.status(400).json(err));
  }
);

// @route   GET api/articles/:id
// @desc    get article route
// @access  Public
router.get("/:id", (req, res) => {
  articles_services
    .getArticlePayload(req)
    .then(articlePayload => res.json(articlePayload))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
