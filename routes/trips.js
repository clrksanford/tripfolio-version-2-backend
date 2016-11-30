var express = require('express');
var router = express.Router();
var Trip = require('../models/trip');
var _ = require('lodash');

/* Find individual trip by Id */
router.use('/:tripId', function (req, res, next) {
  Trip.findById(req.params.tripId, function (error, trip) {
    if(error) {
      res.status(500).send();
    } else if (!trip) {
      res.status(404).send();
    } else {
      res.trip = trip;
      next();
    }
  })
})

/* GET individual trip */
router.get('/:tripId', function(req, res, next) {
  res.json(res.trip);
});

/* UPDATE trip */
router.put('/:tripId', function (req, res, next) {
  req.body = _.pick(req.body, ['pointsOfInterest', 'public']);

  var updatedTrip = Object.assign(res.trip, req.body);

  updatedTrip.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(202).send();
    }
  });
});

/* DELETE trip */
router.delete('/:tripId', function (req, res, next) {
  res.trip.remove(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

/* POST new trip */
router.post('/', function (req, res, next) {

  req.body = _.pick(req.body, [
    'creatorUsername',
    'creatorId',
    'destination',
    'pointsOfInterest',
    'public'
  ]);

  var newTrip = new Trip(req.body);

  newTrip.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(202).send();
    }
  });
});

module.exports = router;
