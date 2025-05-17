const express = require("express");
const router = express.Router();
const { markAttendance } = require("../controllers/studentController"); // or another controller if separated

router.post("/mark", markAttendance); // POST /api/attendance/mark

module.exports = router;