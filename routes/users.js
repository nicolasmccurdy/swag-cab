var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sequelize = new Sequelize('database', null, null, { dialect: 'sqlite' });

  var Driver = sequelize.define('Project', {
    driverid: Sequelize.INTEGER,
    userid: Sequelize.INTEGER,
    seats: Sequelize.INTEGER,
    eventid: Sequelize.INTEGER,
    desc: Sequelize.STRING
  });

  var Event = sequelize.define('Task', {
    eventid: Sequelize.INTEGER,
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    hostid: Sequelize.INTEGER,
    creationdate: Sequelize.DATE,
    queueid: Sequelize.INTEGER
  });
});

module.exports = router;
