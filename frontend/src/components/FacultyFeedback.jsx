/** @format */

import { useState } from "react";
import "./FacultyFeedback.css";
import axios from "axios";
import toast from "react-hot-toast";

const FacultyFeedback = () => {
  const [formData, setFormData] = useState({
    session: "",
    courseName: "",
    term: "",
    facultyName: "",
    fatherName: "",
    email: "",
    mobileNo: "",
    review1: "",
    review2: "",
    review3: "",
    review4: "",
    review5: "",
    review6: "",
    review7: "",
    review8: "",
    review9: "",
    review10: "",
    review11: "",
    review12: "",
    review13: "",
    review14: "",
    review15: "",
    review16: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://bapu-ayurvedic-afte.vercel.app/api/feedback/facultyFeedback", formData);

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
          <select id="session" name="session" value={formData.session} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="courseName">Course Name *</label>
          <input type="text" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="term">Term *</label>
          <input type="text" id="term" name="term" value={formData.term} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name *</label>
          <input type="text" id="facultyName" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father Name *</label>
          <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No *</label>
          <input type="tel" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
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
            {Array.from({ length: 16 }, (_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`Question ${index + 1}`}</td>
                <td>
                  <select name={`review${index + 1}`} value={formData[`review${index + 1}`]} onChange={handleChange} required>
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
