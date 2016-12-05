var express = require('express');
var router = express.Router();
var TravelTile = require('../models/travelTile');
var _ = require('lodash');

/* Find individual tile by Id */
router.use('/:tileId', function (req, res, next) {
  TravelTile.findById(req.params.tileId, function (error, tile) {
    if(error) {
      res.status(500).send();
    } else if (!tile) {
      res.status(404).send();
    } else {
      res.tile = tile;
      next();
    }
  })
})

/* GET individual trip */
router.get('/:tileId', function(req, res, next) {
  res.json(res.tile);
});

/* UPDATE tile */
router.put('/:tileId', function (req, res, next) {
  req.body = _.pick(req.body, [
    'name',
    'image',
    'notes',
    'address',
    'openingHours',
    'entrance',
    'transit'
  ]);

  var updatedTile = Object.assign(res.tile, req.body);

  updatedTile.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedTile);
    }
  });
});

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
      res.status(500).send(err);
    } else {
      res.json(newTravelTile);
    }
  });
});

module.exports = router;
