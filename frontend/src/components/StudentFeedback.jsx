/** @format */

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./StudentFeedback.css";

const StudentFeedback = () => {
  const [formData, setFormData] = useState({
    session: "",
    courseName: "",
    term: "",
    studentName: "",
    fatherName: "",
    email: "",
    mobileNo: "",
    reviews: {
      review1: "",
      review2: "",
      review3: "",
      review4: "",
      review5: "",
      review6: "",
      review7: "",
      review8: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("review")) {
      setFormData({
        ...formData,
        reviews: { ...formData.reviews, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://bapu-ayurvedic-afte.vercel.app/api/feedback/studentFeedback",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Feedback submitted successfully");
      console.log(data.data);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="student-feedback">
      <h1>Student Feedback</h1>
      <p>Please provide your feedback below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Session *</label>
          <select
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
          <label>Term *</label>
          <input
            type="text"
            name="term"
            value={formData.term}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Student Name *</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Father Name *</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile No *</label>
          <input
            type="number"
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
            {Array.from({ length: 8 }, (_, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{getQuestion(i + 1)}</td>
                <td>
                  <select
                    name={`review${i + 1}`}
                    value={formData.reviews[`review${i + 1}`]}
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

const getQuestion = (number) => {
  switch (number) {
    case 1:
      return "Skill Laboratory and Simulation Lab *";
    case 2:
      return "Support of Faculty for any difficulty in Learning *";
    case 3:
      return "Clinical Posting and Exposure *";
    case 4:
      return "Indoor and Outdoor Sports Facilities *";
    case 5:
      return "Central Library Facility *";
    case 6:
      return "Safety Measures in Campus *";
    case 7:
      return "Perceived Career in Ayurveda/Indian System of Medicine vis-a-vis Modern Medicine *";
    case 8:
      return "Perceived Career Support Facilities & Programs *";
    default:
      return "";
  }
};

export default StudentFeedback;
