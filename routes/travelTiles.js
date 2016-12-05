var express = require('express');
var router = express.Router();
var TravelTile = require('../models/travelTile');
var _ = require('lodash');

/* POST new tile */
router.post('/', function (req, res, next) {

  req.body = _.pick(req.body, [
    'address',
    'entrance',
    'image',
    'name',
    'openingHours',
    'transit'
  ]);

  // Create new trip with user params
  var newTravelTile = new TravelTile(req.body);

  newTravelTile.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(newTravelTile);
    }
  });
});

module.exports = router;
