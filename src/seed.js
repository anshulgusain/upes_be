const mongoose = require('mongoose');
const Student = require('./models/Student');
require('dotenv').config();

const seedStudent = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  await Student.deleteMany({});

  const student = new Student({
    sapId: '500123456',
    password: 'Upes@2024',
    name: 'Amisha Sajwan',
    email: 'amisha.sajwan@dehradun.upes.ac.in',
    phone: '+91 98765 43210',
    program: 'MBA - Logistics & Supply Chain Management',
    school: 'School of Business',
    batch: '2025-2027',
    semester: '1st Semester',
    section: 'MBA-A',
    rollNo: 'R252213456',

    documents: [
      { name: 'Aadhaar Card',         type: 'Identity Proof',  status: 'verified', uploadedAt: new Date('2025-04-10'), url: '#' },
      { name: '10th Marksheet',       type: 'Academic',        status: 'verified', uploadedAt: new Date('2025-04-11'), url: '#' },
      { name: '12th Marksheet',       type: 'Academic',        status: 'verified', uploadedAt: new Date('2025-04-11'), url: '#' },
      { name: 'Graduation Certificate', type: 'Academic',      status: 'verified', uploadedAt: new Date('2025-04-12'), url: '#' },
      { name: 'Transfer Certificate', type: 'Academic',        status: 'verified', uploadedAt: new Date('2025-04-12'), url: '#' },
      { name: 'Medical Certificate',  type: 'Health',          status: 'verified', uploadedAt: new Date('2025-04-13'), url: '#' },
      { name: 'Passport Photo',       type: 'Identity Proof',  status: 'verified', uploadedAt: new Date('2025-04-10'), url: '#' },
      { name: 'Character Certificate', type: 'Academic',       status: 'pending',  uploadedAt: new Date('2025-04-14'), url: '#' },
    ],

    feeReceipts: [
      // ── Admission & One-Time Fees ──
      {
        receiptNo:     'UPES/2025/ADM/00124',
        amount:        25000,
        paymentDate:   new Date('2025-04-05'),
        semester:      '1st Semester - Admission Fee',
        paymentMode:   'Online - UPI',
        transactionId: 'TXN20250405UPES0124',
        status:        'Paid',
        description:   'Admission Fee - MBA Logistics & Supply Chain 2025',
      },
      {
        receiptNo:     'UPES/2025/REG/00125',
        amount:        12500,
        paymentDate:   new Date('2025-04-05'),
        semester:      '1st Semester - Registration / Enrollment Fee',
        paymentMode:   'Online - UPI',
        transactionId: 'TXN20250405UPES0125',
        status:        'Paid',
        description:   'Registration & Enrollment Fee - Academic Year 2025-26',
      },
      {
        receiptNo:     'UPES/2025/SEC/00126',
        amount:        20000,
        paymentDate:   new Date('2025-04-05'),
        semester:      '1st Semester - Security Deposit (Refundable)',
        paymentMode:   'Online - UPI',
        transactionId: 'TXN20250405UPES0126',
        status:        'Paid',
        description:   'Security Deposit (Refundable on Program Completion)',
      },

      // ── Year 1 Full Fee ──
      {
        receiptNo:     'UPES/2025/FEE/00127',
        amount:        503000,
        paymentDate:   new Date('2025-04-10'),
        semester:      '1st Year (Sem 1 & 2) - Tuition + Academic Fee',
        paymentMode:   'NEFT Transfer',
        transactionId: 'TXN20250410UPES0127',
        status:        'Paid',
        description:   'Year 1 Fee: Tuition ₹4,20,000 + Academic/Institutional ₹83,000',
      },
    ],

    // Subjects by semester
    subjects: {
      sem1: [
        'Organizational Behaviour',
        'Marketing Management',
        'Managerial Economics',
        'Accounting for Managers',
        'Quantitative Techniques',
        'Business Communication',
        'Introduction to Supply Chain',
        'Operations Management',
        'Business Environment',
      ],
      sem2: [
        'Logistics Management',
        'Inventory Management',
        'Procurement & Sourcing',
        'Transportation Management',
        'Warehouse Management',
        'Supply Chain Analytics',
        'Research Methodology',
      ],
      sem3: [
        'Demand Planning & Forecasting',
        'Lean Supply Chain',
        'Global Logistics / International Trade',
        'Supply Chain Strategy',
        'Electives (Maritime / Energy Supply Chain)',
      ],
      sem4: [
        'Supply Chain Risk Management',
        'Innovation & Entrepreneurship',
        'ESG (Environmental, Social, Governance)',
        'Dissertation / Major Project',
      ],
    },
  });

  await student.save();
  console.log('✅ Student seeded successfully!');
  console.log('📋 SAP ID  : 500123456');
  console.log('🔑 Password: Upes@2024');
  console.log('💰 Total Fee Paid: ₹5,60,500');
  mongoose.disconnect();
};

seedStudent().catch(console.error);