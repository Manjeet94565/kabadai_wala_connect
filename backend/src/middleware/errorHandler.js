const { fail } = require('../utils/response');

function errorHandler(error, req, res, next) {
  if (process.env.NODE_ENV === 'production') console.error(error.message);
  else console.error(error);
  return fail(res, 500, 'Internal server error', 'INTERNAL_SERVER_ERROR');
}

module.exports = errorHandler;
