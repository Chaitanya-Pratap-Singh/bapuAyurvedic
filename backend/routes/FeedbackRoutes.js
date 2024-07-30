import express from "express";
import { AlumniForm, FacultyForm, GrievanceForm, submitStudentFeedback } from "../controllers/FeedbackControllers.js";

const router = express.Router();


router.post("/aluminiFeedback",AlumniForm);
router.post("/facultyFeedback", FacultyForm);
router.post("/grievanceFeedback", GrievanceForm);
router.post('/studentFeedback', submitStudentFeedback);

export default router;