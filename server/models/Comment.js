const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article"
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

CommentSchema.statics.getAllCommentsByArticle = function(articleId) {
  return new Promise((resolve, reject) => {
    Comment.find({ article: articleId })
      .then(commentsData => resolve(commentsData))
      .catch(err => reject("Comments could'nt be fetched."));
  });
};

CommentSchema.statics.addComment = (article_id, user_id, comment_body) => {
  return new Promise((resolve, reject) => {
    const newComment = new Comment({
      user: user_id,
      article: article_id,
      body: comment_body
    });

    newComment
      .save()
      .then(comment => resolve(comment))
      .catch(err => reject(err));
  });
};

module.exports = Comment = mongoose.model("comments", CommentSchema);
