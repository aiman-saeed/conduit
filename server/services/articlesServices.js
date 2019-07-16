// Load User model
const Article = require("./../models/Article");

const { validateArticleInput } = require("./validation/article");
const isEmpty = require("./validation/is-empty");

// test GET request service handler
const test = (req, res) => {
  res.json({ msg: "PUblic Route: Article Works" });
};

// test GET request service handler
const testPrivate = (req, res) => {
  res.json({
    msg: "Private Route: Article Works",
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar
  });
};

// add article request service handler
const addArticle = req => {
  return new Promise((resolve, reject) => {
    const { errors, isValid } = validateArticleInput(req.body);

    // Check Validation
    if (!isValid) {
      reject(errors);
    } else {
      let tags = [];
      if (!isEmpty(req.body.tags)) {
        tags = req.body.tags.split(" ");
      }

      const newArticle = new Article({
        user: req.user.id,
        title: req.body.title,
        subject: req.body.subject,
        body: req.body.body,
        tags
      });

      newArticle
        .save()
        .then(article => resolve(article))
        .catch(err => reject({ err }));
    }
  });
};

module.exports = {
  test,
  testPrivate,
  addArticle
};
