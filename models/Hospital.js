const mongoose = require("mongoose");

const CapacitySchema = mongoose.Schema({
  basic: [Number],
  moderate: [Number],
  emergency: [Number],
});


const HospitalSchema = mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalUniqueRegistrationId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  capacity: {
    type: CapacitySchema,
    required: true,
  },
  treatmentType: {
    type: String,
    enum: ['paid', 'free', 'premimum'],
    default: 'free'

  }
});

module.exports = mongoose.model("Hospital", HospitalSchema);
