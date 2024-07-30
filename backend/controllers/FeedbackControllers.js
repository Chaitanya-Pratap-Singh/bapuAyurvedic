import { AlumniFeedback } from "../models/AluminiFeedback.js";
import { FacultyFeedback } from "../models/FacultyFeedback.js";
import { StudentFeedback } from "../models/StudentFeedback.js";
import { GrievanceFeedback } from "../models/GrievanceFeedback.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const AlumniForm = asyncHandler(async (req, res) => {
  const {
    session,
    courseName,
    term,
    alumniName,
    email,
    mobileNo,
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
  } = req.body;

  if (
    [
      session,
      courseName,
      term,
      alumniName,
      email,
      mobileNo,
      review1,
      review2,
      review3,
      review4,
      review5,
      review6,
      review7,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const newAluminiFeedback = await AlumniFeedback.create({
    session,
    courseName,
    term,
    alumniName,
    email,
    mobileNo,
    reviews: {
      review1,
      review2,
      review3,
      review4,
      review5,
      review6,
      review7,
    },
  });

  if (!newAluminiFeedback) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newAluminiFeedback, "Feedback Added!"));
});

export const FacultyForm = asyncHandler(async (req, res) => {
  const {
    session,
    courseName,
    term,
    facultyName,
    fatherName,
    email,
    mobileNo,
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
    review13,
    review14,
    review15,
    review16,
  } = req.body;

  if (
    [
      session,
      courseName,
      term,
      facultyName,
      fatherName,
      email,
      mobileNo,
      review1,
      review2,
      review3,
      review4,
      review5,
      review6,
      review7,
      review8,
      review9,
      review10,
      review11,
      review12,
      review13,
      review14,
      review15,
      review16,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const newFacultyFeedback = await FacultyFeedback.create({
    session,
    courseName,
    term,
    facultyName,
    fatherName,
    email,
    mobileNo,
    reviews: {
      review1,
      review2,
      review3,
      review4,
      review5,
      review6,
      review7,
      review8,
      review9,
      review10,
      review11,
      review12,
      review13,
      review14,
      review15,
      review16,
    },
  });

  if (!newFacultyFeedback) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newFacultyFeedback, "Feedback Added!"));
});

export const GrievanceForm = asyncHandler(async (req, res) => {
  const {
    session,
    courseName,
    term,
    facultyName,
    fatherName,
    email,
    mobileNo,
    grievance,
  } = req.body;

  if (
    [
      session,
      courseName,
      term,
      facultyName,
      fatherName,
      email,
      mobileNo,
      grievance,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const newGrievanceFeedback = await GrievanceFeedback.create({
    session,
    courseName,
    term,
    facultyName,
    fatherName,
    email,
    mobileNo,
    grievance,
  });

  if (!newGrievanceFeedback) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, newGrievanceFeedback, "Grievance Feedback Added!")
    );
});

export const submitStudentFeedback = asyncHandler(async (req, res) => {
  const {
    session,
    courseName,
    term,
    studentName,
    fatherName,
    email,
    mobileNo,
    reviews,
  } = req.body;

  if (
    [
      session,
      courseName,
      term,
      studentName,
      fatherName,
      email,
      mobileNo,
      ...Object.values(reviews),
    ].some((field) => !field)
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const newFeedback = await StudentFeedback.create({
    session,
    courseName,
    term,
    studentName,
    fatherName,
    email,
    mobileNo,
    reviews,
  });

  if (!newFeedback) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newFeedback, "Feedback submitted successfully"));
});
