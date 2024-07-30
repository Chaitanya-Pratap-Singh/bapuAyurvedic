import express from "express";
import { AlumniForm, FacultyForm } from "../controllers/FeedbackControllers.js";

const router = express.Router();


router.post("/aluminiFeedback",AlumniForm);
router.post("/facultyFeedback", FacultyForm);


export default router;