const { Router } = require("express");
const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();
//GETS ALL THE PATIENT
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.json({ message: error });
  }
});
// SUBMIT THE PATIENT
router.post("/", async (req, res) => {
  const patient = new Patient({
    patientName: req.body.patientName,
    uniqueGovtId: req.body.uniqueGovtId,
    address: req.body.address,
  });

  try {
    const savedPatient = await patient.save();
    res.json(savedPatient);
  } catch (error) {
    res.json({ message: error });
  }
});
//GET A SPECIFIC PATIENT
router.get("/:patientId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  try {
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});
//DELETE A SPECIFIC PATIENT
router.delete("/:patientId", async (req, res) => {
  console.log(req.params.patientId);
  const removedPatient = await Patient.remove({ _id: req.params.patientId });
  try {
    res.json(removedPatient);
  } catch (error) {
    res.json({ message: error });
  }
});
//UPDATE A SPECIFIC PATIENT
router.patch("/:patientId", async (req, res) => {
  console.log(req.body.patientName);

  const updatedPatient = await Patient.updateOne(
    { _id: req.params.patientId },
    { $set: { patientName: req.body.patientName } }
  );
  try {
    res.json(updatedPatient);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
