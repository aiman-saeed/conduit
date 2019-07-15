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
  return new Promise((resolve, reject) => {
    User.findOne({ email }).then(user => {
      if (user) {
        reject("Email Already Exists.");
      } else {
        resolve();
      }
    });
  });
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

UserSchema.statics.nameExistsErr = name => {
  return new Promise((resolve, reject) => {
    User.findOne({ name }).then(user => {
      if (user) {
        resolve({ user, err: "User name Already Exists." });
      } else {
        resolve({ user, err: "" });
      }
    });
  });
};

UserSchema.statics.emailExistsErr = email => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }).then(user => {
      if (user) {
        resolve({ user, err: "Email Already Exists." });
      } else {
        resolve({ user, err: "" });
      }
    });
  });
};

// Static Method
// Takes user id and returns the user
UserSchema.statics.getUser = id => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: id })
      .then(user => resolve(user))
      .catch(err => reject(err));
  });
};

// Static Method
// Updates a user and returns back a user or error
UserSchema.statics.updateUser = userData => {
  return new Promise((resolve, reject) => {
    const { myUser, name, email, password, avatar, bio } = userData;
    myUser.name = name;
    myUser.email = email;
    //myUser.password = password;
    myUser.avatar = avatar;
    myUser.bio = bio;

    myUser
      .save()
      .then(user => {
        resolve(user);
      })
      .catch(err => reject(err));
  });
};

// Static Method
// Registers a user and returns back a user or error
UserSchema.statics.registerUser = newUser => {
  return new Promise((resolve, reject) => {
    Utils.hashPassword(newUser.password)
      .then(hash => {
        newUser.password = hash;
        return newUser.save();
      })
      .then(user => resolve(user))
      .catch(err => reject(err));
  });
};

// Exports
module.exports = User = mongoose.model("users", UserSchema);
