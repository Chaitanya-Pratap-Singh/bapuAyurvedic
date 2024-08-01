/** @format */

import { useState } from "react";
import "./FacultyFeedback.css";
import axios from "axios";
import toast from "react-hot-toast";

const questions = [
  "Empathy of Management towards Faculty",
  "Reward and Recognition for best performing tasks",
  "Promotions & Increments",
  "Salary Structures Policy",
  "Opportunity for Career Advancement",
  "Fair allocation and allotments of Responsibilities",
  "Exposure to Advanced Health Education Technology",
  "Faculty welfare and amenities",
  "Accommodations for Staff",
  "Work Load",
  "Recognition and Importance",
  "Motivating work Environment",
  "Perceived reputation of the college",
  "Academic Freedom and Flexibility",
  "Recommending College among BAMS aspirants for admission",
  "Recommending College for jobs",
];

const FacultyFeedback = () => {
  const [formData, setFormData] = useState({
    session: "",
    courseName: "",
    term: "",
    facultyName: "",
    fatherName: "",
    email: "",
    mobileNo: "",
    ...questions.reduce(
      (acc, _, index) => ({ ...acc, [`review${index + 1}`]: "" }),
      {}
    ),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://bapu-ayurvedic-afte.vercel.app/api/feedback/facultyFeedback",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Feedback Submitted Successfully");
      console.log(data.data);
    } catch (error) {
      toast.error("Something went Wrong !");
      console.log(error);
    }
  };

  return (
    <div className="faculty-feedback">
      <h1>Faculty Feedback</h1>
      <p>Please provide your feedback below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="session">Session *</label>
          <select
            id="session"
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="form-group">
          <label>Course Name *</label>
          <select
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Bachelor of Ayurvedic Medicine and Surgery.">
              Bachelor of Ayurvedic Medicine and Surgery.
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="term">Term *</label>
          <input
            type="text"
            id="term"
            name="term"
            value={formData.term}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name *</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father Name *</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No *</label>
          <input
            type="number"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>

        <table className="feedback-table">
          <thead>
            <tr>
              <th>S NO</th>
              <th>Question</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question}</td>
                <td>
                  <select
                    name={`review${index + 1}`}
                    value={formData[`review${index + 1}`]}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FacultyFeedback;
