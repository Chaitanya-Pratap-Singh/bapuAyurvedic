import mongoose from "mongoose"

const AlumniFeedbackSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
    enum: ['2024', '2023', '2022']
  },
  courseName: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  alumniName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  reviews: {
    review1: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review2: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review3: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review4: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review5: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review6: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    },
    review7: {
      type: String,
      required: true,
      enum: ['available', 'not-available']
    }
  }
});

export const AlumniFeedback = mongoose.model('AlumniFeedback', AlumniFeedbackSchema);
