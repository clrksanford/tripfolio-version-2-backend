var mongoose = require('mongoose');

var tripSchema = mongoose.Schema ({
  creatorUsername: String,
  creatorId: String,
  destination: String,
  pointsOfInterest: Object,
  public: Boolean
});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
