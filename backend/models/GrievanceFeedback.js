import mongoose from 'mongoose';

const GrievanceFeedbackSchema = new mongoose.Schema({
  session: {
    type: String,
    enum: ['2024', '2023', '2022'],
    required: true,
  },
  courseName: { type: String, required: true },
  term: { type: String, required: true },
  facultyName: { type: String, required: true },
  fatherName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  grievance: { type: String, required: true },
});

export const GrievanceFeedback = mongoose.model('GrievanceFeedback', GrievanceFeedbackSchema);

