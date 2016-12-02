var express = require('express');
var router = express.Router();
var Trip = require('../models/trip');
var _ = require('lodash');

/* GET other users' trips by destination */
router.get('/:cityName', function (req, res, next) {
  var cityName = req.params.cityName.toLowerCase();
  console.log(cityName);

  Trip.find({destination: cityName}, function (error, trips) {
    if(error) {
      res.status(500).send();
    } else if (!trips) {
      res.status(404).send();
    } else {
      res.json(trips);
    }
  })
})

module.exports = router;
