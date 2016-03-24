var fs = require('fs');

var throwError = function () {
  throw new Error('Y U NO UNIT TEST?!');
};

module.exports = function () {
  fs.readFile = throwError;
};
