const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const app = express();

app.use(cors());
app.use(express.json());

//Routes

const patientRoutes = require("./routes/patients");
const hospitalRoutes = require("./routes/hospital");
const bookingRoutes = require("./routes/booking");
const cancelbookingRoutes = require("./routes/cancelbooking");
const allottedHospitalsRoutes = require("./routes/allottedHospitals");
const cancelallotmentRoutes = require("./routes/cancelallotment");
const registrationRoutes = require("./routes/registration");
const notificationRoutes = require("./routes/notification");

app.use("/patients", patientRoutes);
app.use("/hospitals", hospitalRoutes);
app.use("/create-booking", bookingRoutes);
app.use("/cancel-booking", cancelbookingRoutes);
app.use("/get-alloted-hospital", allottedHospitalsRoutes);
app.use("/cancel-allottment", cancelallotmentRoutes);
app.use("/registration", registrationRoutes);
app.use("/notification", notificationRoutes);
//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
app.listen(process.env.PORT || 3000);
