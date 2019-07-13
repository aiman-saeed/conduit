const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  favoritesCount: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: [{ type: String }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model("articles", ArticleSchema);
