const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Notification", notificationSchema);
