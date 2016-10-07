const path = require('path');

let config = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 8080,
  name: process.env.NAME || 'NO NAME'
};

module.exports = config;
