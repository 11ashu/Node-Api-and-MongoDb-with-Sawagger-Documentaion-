let config = {};

switch (process.env.NODE_ENV) {
  case 'dev':
    config = require('./dev');
    break;
  case 'production':
    config = require('./production');
    break;
  default:
    config = require('./localhost');
}

module.exports = config;
