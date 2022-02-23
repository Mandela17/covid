const { Router } = require("express");
const express = require("express");
const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");

const router = express.Router();
//DELETE A SPECIFIC BOOKING
router.delete("/:bookingId", async (req, res) => {
  const removedBooking = await Booking.remove({ _id: req.params.bookingId });
  try {
    // res.send("Booking Cancelled for this booking id: " + req.params.bookingId);
    res.json(`Booking Cancelled for this booking id:${req.params.bookingId}`);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
