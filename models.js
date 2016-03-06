var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/swagcab');

module.exports = {
  Driver: mongoose.model('Driver', {
    driverid: Number,
    userid: Number,
    seats: Number,
    eventid: Number,
    desc: String
  }),

  Event: mongoose.model('Event', {
    eventid: Number,
    name: String,
    location: String,
    hostid: Number,
    creationdate: Date,
    queueid: Number
  })
};
