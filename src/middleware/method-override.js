'use strict';

const methodOverride = require('/Users/rondunphy/CODE/code-fellows/book-app/src/middleware/method-override');

module.exports = (methodOverride((request, response, next) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));
