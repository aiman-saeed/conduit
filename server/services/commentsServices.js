// Load Comment model
const Comment = require("./../models/Comment");

// test GET request service handler
const test = (req, res) => {
  res.json({ msg: "Public Route: Comment Works" });
};

// test GET request service handler
const testPrivate = (req, res) => {
  res.json({
    msg: "Private Route: Comment Works",
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar
  });
};
// add comment request service handler
const addComment = req => {
  return new Promise((resolve, reject) => {
    Comment.addComment(req.params.id, req.user.id, req.body.body)
      .then(comment => resolve(comment))
      .catch(err => reject({ comment: err }));
  });
};

module.exports = {
  test,
  testPrivate,
  addComment
};
