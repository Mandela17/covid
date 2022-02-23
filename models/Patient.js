const mongoose = require("mongoose");
const PatientSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  uniqueGovtId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ['basic', 'moderate', 'emergency'],
    default: 'basic'

  }
});

module.exports = mongoose.model("Patient", PatientSchema);
