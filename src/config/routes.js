/**
 * Main application routes
 */
const mount = require('koa-mount');

module.exports = function(app) {
  app.use(mount('/', require('../resources/greet')));

  app.use(function *pageNotFound(next) {
    yield next;

    if (404 != this.status) return;

    this.status = 404;
    this.body = {
      title: 'The object you requested was not found'
    };
  });
};
