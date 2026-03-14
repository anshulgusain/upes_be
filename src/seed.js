const mongoose = require('mongoose');
const Student = require('./models/Student');
require('dotenv').config();

const seedStudent = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  await Student.deleteMany({});

  const student = new Student({
    sapId: 'amisha2026',
    password: 'amisha@sajwan',
    name: 'Amisha Sajwan',
    email: 'amisha.sajwan@dehradun.upes.ac.in',
    phone: '+91 98765 43210',
    program: 'MBA',
    school: 'School oF Business Administration',
    batch: '2026-2028',
    semester: '1st Semester',
    section: 'MBA-A',
    rollNo: 'R222213123',
    documents: [
      {
        name: 'Aadhaar Card',
        type: 'Identity Proof',
        status: 'verified',
        uploadedAt: new Date('2026-03-10'),
        url: '#',
      },
      {
        name: '10th Marksheet',
        type: 'Academic',
        status: 'verified',
        uploadedAt: new Date('2026-03-11'),
        url: '#',
      },
      {
        name: '12th Marksheet',
        type: 'Academic',
        status: 'verified',
        uploadedAt: new Date('2026-03-11'),
        url: '#',
      },
      {
        name: 'Transfer Certificate',
        type: 'Academic',
        status: 'verified',
        uploadedAt: new Date('2026-03-12'),
        url: '#',
      },
      {
        name: 'Medical Certificate',
        type: 'Health',
        status: 'verified',
        uploadedAt: new Date('2026-03-13'),
        url: '#',
      },
      {
        name: 'Passport Photo',
        type: 'Identity Proof',
        status: 'verified',
        uploadedAt: new Date('2026-03-10'),
        url: '#',
      },
      {
        name: 'Character Certificate',
        type: 'Academic',
        status: 'pending',
        uploadedAt: new Date('2026-03-13'),
        url: '#',
      },
      {
        name: 'Category Certificate (OBC)',
        type: 'Category Proof',
        status: 'verified',
        uploadedAt: new Date('2026-03-14'),
        url: '#',
      },
    ],
    feeReceipts: [
      {
        receiptNo: 'UPES/2026/FEE/09847',
        amount: 20000,
        paymentDate: new Date('2026-02-25'),
        semester: '5th Semester - Exam Fee',
        paymentMode: 'Online - UPI',
        transactionId: 'TXN20240105UPES9847',
        status: 'Paid',
        description: 'Semester Examination Fee - March 2026',
      },
 
    ],
  });

  await student.save();
  console.log('✅ Demo student seeded!');
  console.log('📋 SAP ID: 500123456');
  console.log('🔑 Password: Upes@2024');
  mongoose.disconnect();
};

seedStudent().catch(console.error);
