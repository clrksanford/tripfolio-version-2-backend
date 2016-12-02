var express = require('express');
var router = express.Router();
var Trip = require('../models/trip');
var _ = require('lodash');

/* GET other users' trips by destination */
router.get('/:cityName', function (req, res, next) {
  Trip.find(req.params.cityName, function (error, trips) {
    if(error) {
      res.status(500).send();
    } else if (!trip) {
      res.status(404).send();
    } else {
      res.json(trips);
    }
  })
})

module.exports = router;
