// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/environment');

// Bootstrap server
let app = require('koa')();

require('./config/routes')(app);

// Start server
if (!module.parent) {
  app.listen(config.port, config.ip, function () {
    console.log('Koa server listening on %d, in %s mode', config.port, config.env);
  });
}

// Expose app
exports = module.exports = app;
