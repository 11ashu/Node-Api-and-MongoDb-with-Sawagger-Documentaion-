console.log('using Dev config');

const config = {};

config.db = {
    uri: 'mongodb://localhost:27017/apidb',
};

module.exports = config;