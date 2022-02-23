const mongoose = require("mongoose");
const RegistrationSchema = mongoose.Schema({
  uniqueGovtId: {
    type: String,
    required: true,
  },
  BookingId: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Registration", RegistrationSchema);
