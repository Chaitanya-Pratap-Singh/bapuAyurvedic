import mongoose from "mongoose";

const StudentFeedbackSchema = new mongoose.Schema({
  session: { type: String, required: true },
  courseName: { type: String, required: true },
  term: { type: String, required: true },
  studentName: { type: String, required: true },
  fatherName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  reviews: {
    review1: { type: String, required: true },
    review2: { type: String, required: true },
    review3: { type: String, required: true },
    review4: { type: String, required: true },
    review5: { type: String, required: true },
    review6: { type: String, required: true },
    review7: { type: String, required: true },
    review8: { type: String, required: true },
  },
});

export const StudentFeedback = mongoose.model(
  "StudentFeedback",
  StudentFeedbackSchema
);
