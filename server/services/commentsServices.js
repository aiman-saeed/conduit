// Load Comment model
const Comment = require("./../models/Comment");
// Load User model
const User = require("./../models/User");

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
    avatar: req.user.avatar,
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

const getComments = req => {
  let commentsData = [];
  return new Promise((resolve, reject) => {
    Comment.getAllCommentsByArticle(req.params.id)
      .then(
        comments => {
          commentsData = comments;

          let usersIdArr = [];
          comments.forEach(comment => {
            usersIdArr.push(comment.user);
          });

          return User.getUsersCommentData(usersIdArr);
        },
        err => reject({ user: err }),
      )
      .then(usersData => {
        for (let i = 0; i < commentsData.length; i++) {
          for (let j = 0; j < usersData.length; j++) {
            if (
              usersData[j]._id.toString() === commentsData[i].user.toString()
            ) {
              commentsData[i] = {
                ...commentsData[i]._doc,
                avatar: usersData[j].avatar,
                name: usersData[j].name,
              };
            }
          }
        }
        resolve(commentsData);
      })
      .catch(err => reject({ comment: err }));
  });
};

module.exports = {
  test,
  testPrivate,
  addComment,
  getComments,
};
