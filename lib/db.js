// Bring Mongoose into the app
const mongoose = require('mongoose');
const config = require('../config');
var db = mongoose.connection;
const dbURI = config.db.uri;

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ', dbURI);
    db.close();
});
  
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ', err);
    db.close();
});

exports.connect = (next) => {
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
      
    });
};