const mongoose = require("mongoose");
const Utils = require("./../services/utils/utils.js");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  tokens: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
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
UserSchema.statics.getUsersCommentData = usersIdArr => {
  const mongooseObjectsArr = [];
  usersIdArr.forEach(id => {
    mongooseObjectsArr.push(mongoose.Types.ObjectId(id));
  });

  return new Promise((resolve, reject) => {
    User.find(
      { _id: { $in: mongooseObjectsArr } },
      { _id: 1, avatar: 1, name: 1 },
    )
      .then(users => {
        resolve(users);
      })
      .catch(err => reject("Couldn't Resolve Users data."));
  });
};

UserSchema.statics.saveAndReturnToken = (user, token) => {
  return new Promise((resolve, reject) => {
    user.tokens.push(token);

    user
      .save()
      .then(user => {
        resolve(token);
      })
      .catch(err => {
        reject("Token not saved in User.");
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
      .catch(err => reject("User not found"));
  });
};

// Static Method
// Updates a user and returns back a user or error
UserSchema.statics.updateUser = userData => {
  return new Promise((resolve, reject) => {
    const { myUser, name, email, password, avatar, bio } = userData;
    myUser.name = name;
    myUser.email = email;
    myUser.avatar = avatar;
    myUser.bio = bio;
    Utils.hashPassword(password)
      .then(hash => {
        myUser.password = hash;
        return myUser.save();
      })
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
