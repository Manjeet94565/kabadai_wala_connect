const { validationResult } = require('express-validator');
const { fail } = require('../utils/response');

function validate(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const message = result.array().map((error) => error.msg).join('; ');
  return fail(res, 400, message, 'VALIDATION_ERROR');
}

module.exports = validate;
