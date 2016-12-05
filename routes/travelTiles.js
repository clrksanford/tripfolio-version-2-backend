var express = require('express');
var router = express.Router();
var TravelTile = require('../models/travelTile');
var _ = require('lodash');


/* GET tiles */
router.get('/', function (req, res, next) {
  TravelTile.find({}, function (error, tiles) {
    if(error) {
      res.status(500).send();
    } else if (!tiles) {
      res.status(404).send();
    } else {
      res.json(tiles);
    }
  })
})

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
