const mongoose = require("mongoose");
const Utils = require("./../services/utils/utils.js");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ""
  },
  bio: {
    type: String,
    default: ""
  }
});

// Static Method
// Searches user by email and returns a promise, success on non existence
UserSchema.statics.emailDoesntExists = email => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ email }).then(user => {
      if (user) {
        reject("Email Already Exists.");
      } else {
        resolve();
      }
    });
  });

  return promise;
};

// Static Method
// Searches user by email and returns a promise, success on existence
UserSchema.statics.emailExists = email => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ email }).then(user => {
      if (user) {
        resolve(user);
      } else {
        reject("Email not registered");
      }
    });
  });

  return promise;
};

// Static Method
// Registers a user and returns back a user or error
UserSchema.statics.registerUser = newUser => {
  const promise = new Promise((resolve, reject) => {
    Utils.hashPassword(newUser.password)
      .then(hash => {
        newUser.password = hash;
        return newUser.save();
      })
      .then(user => resolve(user))
      .catch(err => reject(err));
  });

  return promise;
};

// Exports
module.exports = User = mongoose.model("users", UserSchema);
