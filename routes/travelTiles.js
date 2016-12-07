var express = require('express');
var router = express.Router();
var TravelTile = require('../models/travelTile');
var _ = require('lodash');


// router.get('/test', function (req, res, next) {
//   TravelTile.findById('5846d9d17d185208815005eb')
//     .populate('_tripId')
//     .exec(function (err, tile) {
//       if(err) {
//         res.status(500).send(err);
//       } else if (!tile) {
//         res.status(404).send();
//       } else {
//         console.log(tile._tripId.destination);
//         res.json(tile._tripId);
//       }
//     })
// })

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

/* GET individual tile */
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
    'helpfulLinks',
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

/* DELETE tile */
router.delete('/:tileId', function (req, res, next) {
  res.tile.remove(function (err) {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(204).send();
    }
  })
})

/* POST new tile */
router.post('/', function (req, res, next) {

  req.body = _.pick(req.body, [
    '_correspondingTrip',
    'address',
    'creatorId',
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
