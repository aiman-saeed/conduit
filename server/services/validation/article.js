const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateArticleInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.body = !isEmpty(data.body) ? data.body : "";

  if (!Validator.isLength(data.title, { min: 1, max: 30 })) {
    errors.title = "Title is too short (minimum is 1 character)";
  }
  if (!Validator.isLength(data.body, { min: 1, max: 30 })) {
    errors.body = "Body can't be blank";
  }
  if (!Validator.isLength(data.subject, { min: 1, max: 30 })) {
    errors.subject = "Description can't be blank";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = {
  validateArticleInput
};
