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
    avatar: req.user.avatar,
  });
};

// User update POST request service handler
const updateUser = req => {
  const { name, email } = req.body;
  const errors = {};
  return new Promise((resolve, reject) => {
    User.getUser(req.user.id)
      .then(myUser => {
        User.nameExistsErr(name)
          .then(({ user, err }) => {
            if (user) {
              if (!user._id.equals(req.user.id)) {
                errors.name = err;
              }
            }
            return User.emailExistsErr(email);
          })
          .then(({ user, err }) => {
            if (user) {
              if (!user._id.equals(req.user.id)) {
                errors.email = err;
              }
            }
            return;
          })
          .then(() => {
            if (Object.keys(errors).length) {
              reject(errors);
            } else {
              return User.updateUser({
                myUser,
                name,
                email,
                password: req.body.password,
                avatar: req.body.avatar,
                bio: req.body.bio,
              });
            }
          })
          .then(user => resolve(user))
          .catch(err => reject({ err }));
      })
      .catch(err => reject({ err }));
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
            password: req.body.password,
          });
          return User.registerUser(newUser);
        },
        err => {
          reject({ email: err });
        },
      )
      .then(user => resolve(user))
      .catch(err => reject({ err }));
  });

  return promise;
};

const logoutUser = req => {
  return new Promise((resolve, reject) => {
    const token = req.header("Authorization");
    const currUserId = req.user.id;
    User.findOne({ _id: currUserId })
      .then(user => {
        const index = user.tokens.indexOf(token);
        if (index === -1) {
          reject({ err: "You must be logged in." });
        }

        user.tokens.splice(index, 1);
        return user.save();
      })
      .then(user => resolve(user))
      .catch(err => reject({ err }));
  });
};

// loginUser POST request service handler
const loginUser = req => {
  const email = req.body.email;
  const password = req.body.password;
  let validatedUser = {};

  const promise = new Promise((resolve, reject) => {
    User.emailExists(email)
      .then(
        user => {
          return Utils.validatePassword(password, user);
        },
        err => reject({ email: err }),
      )
      .then(user => {
        validatedUser = user;
        return Utils.signJwtToken(user, keys.secretOrKey, {
          expiresIn: 3600,
        });
      })
      .then(rawtoken => {
        return User.saveAndReturnToken(validatedUser, "Bearer " + rawtoken);
      })
      .then(
        token => {
          resolve({
            success: true,
            token,
          });
        },
        err => reject({ token: err }),
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
  loginUser,
  updateUser,
  logoutUser,
};
