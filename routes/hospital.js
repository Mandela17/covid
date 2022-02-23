const { Router } = require("express");
const express = require("express");
const Hospital = require("../models/Hospital");

const router = express.Router();
//GETS ALL THE PATIENT
router.get("/", async (req, res) => {
  try {
    const hospital = await Hospital.find();
    res.json(hospital);
  } catch (error) {
    res.json({ message: error });
  }
});
router.get("/bed-availabilty", async (req, res) => {
  try {
    const hospital = await Hospital.find();
    let bedAvailable = hospital.map(hospital => {
      return {
        hospitalName: hospital.hospitalName,
        capacity: hospital.capacity
      }
    })

    res.json(bedAvailable);
  } catch (error) {
    res.json({ message: error });
  }
});
// SUBMIT THE PATIENT
router.post("/", async (req, res) => {
  const hospital = new Hospital({
    hospitalName: req.body.hospitalName,
    hospitalUniqueRegistrationId: req.body.hospitalUniqueRegistrationId,
    address: req.body.address,
    capacity: {
      basic: req.body.capacity.basic,
      moderate: req.body.capacity.moderate,
      emergency: req.body.capacity.emergency,
    }
  });

  try {
    const savedHospital = await hospital.save();
    res.json(savedHospital);
  } catch (error) {
    res.json({ message: error });
  }
});
//GET A SPECIFIC PATIENT
router.get("/:hospitalId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});
//DELETE A SPECIFIC PATIENT
router.delete("/:hospitalId", async (req, res) => {
  const removedHospital = await Hospital.remove({ _id: req.params.hospitalId });
  try {
    res.json(removedHospital);
  } catch (error) {
    res.json({ message: error });
  }
});
//UPDATE A SPECIFIC PATIENT
router.patch("/:hospitalId", async (req, res) => {
  const updatedHospital = await Hospital.updateOne(
    { _id: req.params.hospitalId },
    { $set: { hospitalName: req.body.hospitalName } }
  );
  try {
    res.json(updatedHospital);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
