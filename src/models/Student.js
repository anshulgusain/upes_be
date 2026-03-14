const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const documentSchema = new mongoose.Schema({
  name: String,
  type: String,
  uploadedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['verified', 'pending', 'rejected'], default: 'verified' },
  url: String,
});

const feeReceiptSchema = new mongoose.Schema({
  receiptNo: String,
  amount: Number,
  paymentDate: Date,
  semester: String,
  paymentMode: String,
  transactionId: String,
  status: { type: String, default: 'Paid' },
  description: String,
});

const studentSchema = new mongoose.Schema({
  sapId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  program: String,
  school: String,
  batch: String,
  semester: String,
  section: String,
  rollNo: String,
  profilePhoto: String,
  documents: [documentSchema],
  feeReceipts: [feeReceiptSchema],
  createdAt: { type: Date, default: Date.now },
});

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

studentSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Student', studentSchema);
