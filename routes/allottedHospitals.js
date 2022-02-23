const { Router } = require("express");
const express = require("express");
const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    let allotedHospitals = bookings.map(booking => {
      return {
        hospitalName: booking.hospitalName,
        BookingId: booking._id,
      }
    })
    res.json(allotedHospitals);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
