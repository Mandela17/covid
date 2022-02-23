const { Router } = require("express");
const express = require("express");
const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");

const router = express.Router();
router.post("/", async (req, res) => {
  const notification = new Notification({
    message: req.body.patientName,
  });

  try {
    const savedBooking = await booking.save();
    res.json("BookingId: " + savedBooking._id);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
