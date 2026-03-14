const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { sapId, password } = req.body;
    if (!sapId || !password)
      return res.status(400).json({ message: 'SAP ID and password are required' });

    const student = await Student.findOne({ sapId });
    if (!student)
      return res.status(401).json({ message: 'Invalid SAP ID or password' });

    const isMatch = await student.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid SAP ID or password' });

    const token = jwt.sign(
      { id: student._id, sapId: student.sapId, name: student.name },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      student: {
        id: student._id,
        sapId: student.sapId,
        name: student.name,
        email: student.email,
        program: student.program,
        school: student.school,
        batch: student.batch,
        semester: student.semester,
        section: student.section,
        rollNo: student.rollNo,
        phone: student.phone,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;
