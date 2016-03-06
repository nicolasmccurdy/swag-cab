var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/swagcab');

module.exports = {
  Driver: mongoose.model('Driver', {
    userid: { type: Number, required: true },
    seats: { type: Number, required: true },
    eventid: { type: Number, required: true },
    desc: { type: String, required: true }
  }),

  Event: mongoose.model('Event', {
    name: { type: String, required: true },
    location: { type: String, required: true },
    hostid: { type: Number, required: true },
    creationdate: { type: Date, required: true },
    queueid: { type: Number, required: true }
  })
};
