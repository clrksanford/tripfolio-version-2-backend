var express = require('express');
var router = express.Router();
var Trip = require('../models/trip');

/* GET logged in user's trips. */
router.get('/:userId', function(req, res, next) {
  Trip.find({creatorId: req.params.userId}, function (error, trips) {
    if(error) {
      res.status(500).send();
    } else if (trips && trips.length === 0) {
      res.status(404).send();
    } else {
      res.json(trips);
    }
  })
});

module.exports = router;
