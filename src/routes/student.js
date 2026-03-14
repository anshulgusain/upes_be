const express = require('express');
const Student = require('../models/Student');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// GET /api/student/profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('-password');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/student/documents
router.get('/documents', authMiddleware, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('documents name');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ documents: student.documents });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/student/fee-receipts
router.get('/fee-receipts', authMiddleware, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('feeReceipts name sapId');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ feeReceipts: student.feeReceipts, name: student.name, sapId: student.sapId });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
