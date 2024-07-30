import mongoose from "mongoose";

const FacultyFeedbackSchema = new mongoose.Schema({
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
  facultyName: {
    type: String,
    required: true
  },
  fatherName: {
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
    },
    review8: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review9: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review10: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review11: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review12: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review13: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review14: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review15: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    },
    review16: {
      type: String,
      required: false,
      enum: ['available', 'not-available']
    }
  }
});

export const FacultyFeedback = mongoose.model('FacultyFeedback', FacultyFeedbackSchema);
