/** @format */

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import "./GrievanceFeedback.css";

function GrievanceFeedback() {
  const [formData, setFormData] = useState({
    session: "",
    courseName: "",
    term: "",
    facultyName: "",
    fatherName: "",
    email: "",
    mobileNo: "",
    grievance: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://bapu-ayurvedic-afte.vercel.app/api/feedback/grievanceFeedback", formData);
      toast.success("Feedback Submitted Successfully");
      console.log(data.message);
    } catch (error) {
      toast.error("Something went Wrong !");
      console.log(error);
    }
  };

  return (
    <div className="grievance-feedback">
      <h1>Grievance Feedback</h1>
      <p>Send your valuable feedback</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Session *</label>
          <select name="session" value={formData.session} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name *</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="email">E-Mail *</label>
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
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grievance">Write To Grievance</label>
          <textarea
            id="grievance"
            name="grievance"
            value={formData.grievance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Your Feedback</button>
      </form>
    </div>
  );
}

export default GrievanceFeedback;
