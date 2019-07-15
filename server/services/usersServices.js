// Load config keys
const keys = require("./../config/keys");

// Load Utils
const Utils = require("./utils/utils.js");

// Load User model
const User = require("./../models/User");

// test GET request service handler
const test = (req, res) => {
  res.json({ msg: "Public Route: User Works" });
};

// test GET request service handler
const testPrivate = (req, res) => {
  res.json({
    msg: "Private Route: User Works",
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar
  });
};

// registerUser POST request service handler
const registerUser = req => {
  const promise = new Promise((resolve, reject) => {
    User.emailDoesntExists(req.body.email)
      .then(
        () => {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          });
          return User.registerUser(newUser);
        },
        err => {
          reject({ email: err });
        }
      )
      .then(user => resolve(user))
      .catch(err => reject(err));
  });

  return promise;
};

// loginUser POST request service handler
const loginUser = req => {
  const email = req.body.email;
  const password = req.body.password;

  const promise = new Promise((resolve, reject) => {
    User.emailExists(email)
      .then(
        user => {
          return Utils.validatePassword(password, user);
        },
        err => reject({ email: err })
      )
      .then(user => {
        return Utils.signJwtToken(user, keys.secretOrKey, {
          expiresIn: 3600
        });
      })
      .then(rawtoken =>
        resolve({
          success: true,
          token: "Bearer " + rawtoken
        })
      )
      .catch(err => reject({ password: err }));
  });

  return promise;
};

// Exports
module.exports = {
  test,
  testPrivate,
  registerUser,
  loginUser
};
