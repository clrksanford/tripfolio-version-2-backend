var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelTileSchema = Schema({
  _correspondingTrip: {type: Schema.ObjectId, ref: 'Trip'},
  creatorId: {type: String, required: true},
  name: {type: String, required: true},
  image: String,
  notes: String,

  /*--- BEGIN ADDRESS ---*/

  address: {
    street1: String,
    street2: String,
    city: String,
    country: String,
    zip: String,
    phone: String
  }, // End address

  /*--- BEGIN ENTRANCE ---*/

  entrance: {
    entrance1: {
      label: String,
      price: Number
    },
    entrance2: {
      label: String,
      price: Number
    },
    entrance3: {
      label: String,
      price: Number
    },
    entrance4: {
      label: String,
      price: Number
    },
    entrance5: {
      label: String,
      price: Number
    }
  }, // End entrance

  /*--- BEGIN OPENING HOURS ---*/

  openingHours: {
    day1: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day2: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day3: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day4: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day5: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day6: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    },
    day7: {
      closed: Boolean,
      from1: Number,
      to1: Number,
      from2: Number,
      to2: Number,
      from3: Number,
      to3: Number
    }
  }, // End openingHours

  /*--- BEGIN TRANSIT ---*/

  transit: {
    notes: String,
    link1: {
      name: String,
      url: String
    },
    link2: {
      name: String,
      url: String
    },
    link3: {
      name: String,
      url: String
    },
    link4: {
      name: String,
      url: String
    },
    link5: {
      name: String,
      url: String
    }
  } // End transit
});

var TravelTile = mongoose.model('TravelTile', travelTileSchema);

module.exports = TravelTile;
