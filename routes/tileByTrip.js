var express = require('express');
var router = express.Router();
var TravelTile = require('../models/travelTile');
var Trip = require('../models/trip');
var _ = require('lodash');

/* GET tiles by trip */
router.get('/:tripId', function (req, res, next) {
  TravelTile.find({ _correspondingTrip: req.params.tripId }, function (error, tiles) {
    if(error) {
      res.status(500).send(error);
    } else if(!tiles) {
      res.status(404).send();
    } else {
      res.json(tiles);
    }
  })
})

module.exports = router;
