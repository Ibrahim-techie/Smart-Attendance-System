const express = require('express');
const router = express.Router();
const PredefinedStudent = require('../models/PredefinedStudent');

router.post('/add-student', async (req, res) => {
  const { name, collegeId } = req.body;
  try {
    const student = new PredefinedStudent({ name, collegeId });
    await student.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

module.exports = router;
