const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  patientUUID: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  treatmentType: {
    type: String,
    enum: ['paid', 'free', 'premimum'],
    default: 'free'

  }
});

module.exports = mongoose.model("Booking", bookingSchema);
