const { Router } = require("express");
const express = require("express");
const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");

const router = express.Router();
router.post("/", async (req, res) => {
  const booking = new Booking({
    patientName: req.body.patientName,
    hospitalName: req.body.hospitalName,
    patientUUID: req.body.patientUUID,
    address: req.body.address,
    treatmentType: req.body.treatmentType,
  });

  try {
    const savedBooking = await booking.save();
    res.json("BookingId: " + savedBooking._id);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
