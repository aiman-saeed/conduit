const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  hashPassword: password => {
    let promise = new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) reject(err);
          resolve(hash);
        });
      });
    });

    return promise;
  },

  validatePassword: (password1, user) => {
    const promise = new Promise((resolve, reject) => {
      // Check Password
      bcrypt.compare(password1, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          resolve(user);
        } else {
          reject("Password incorrect");
        }
      });
    });

    return promise;
  },

  signJwtToken: (user, secretOrKey, expiresIn) => {
    // Create JWT Payload
    const payload = { id: user.id, name: user.name, avatar: user.avatar };
    const promise = new Promise((resolve, reject) => {
      // Sign Token
      jwt.sign(payload, secretOrKey, expiresIn, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });

    return promise;
  }
};
