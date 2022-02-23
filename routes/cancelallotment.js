const { Router } = require("express");
const express = require("express");
const Booking = require("../models/Booking");
const Hospital = require("../models/Hospital");

const router = express.Router();
//DELETE A SPECIFIC ALLOTMENT
router.delete("/:bookingId", async (req, res) => {
  const removedBooking = await Booking.remove({ _id: req.params.bookingId });
  try {
    res.json(`alloted hospital Cancelled for this booking id:${req.params.bookingId}`);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
