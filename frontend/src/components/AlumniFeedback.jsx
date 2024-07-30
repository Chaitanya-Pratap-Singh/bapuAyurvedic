/** @format */

import { useState } from "react";
import "./AlumniFeedback.css";
import axios from "axios";
import toast from "react-hot-toast";

const AlumniFeedback = () => {
  const [formData, setFormData] = useState({
    session: "",
    courseName: "",
    term: "",
    alumniName: "",
    email: "",
    mobileNo: "",
    review1: "",
    review2: "",
    review3: "",
    review4: "",
    review5: "",
    review6: "",
    review7: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("https://bapu-ayurvedic-afte.vercel.app/api/feedback/aluminiFeedback" , formData.{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // if your backend requires credentials
      });

      toast.success("Feedback Submitted Successfully");
      console.log(data.data);
    } catch (error) {
      toast.error("Something went Wrong !");
      console.log(error);
    }
  };
  return (
    <div className="alumni-feedback">
      <h1>Alumni Feedback</h1>
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
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
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
          <label>Alumni Name *</label>
          <input
            type="text"
            name="alumniName"
            value={formData.alumniName}
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
            type="tel"
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
            <tr>
              <td>1</td>
              <td>Empathy of Management towards Faculty *</td>
              <td>
                <select
                  name="review1"
                  value={formData.review1}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reward and Recognition for Best Performing Tasks *</td>
              <td>
                <select
                  name="review2"
                  value={formData.review2}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Promotions & Increments *</td>
              <td>
                <select
                  name="review3"
                  value={formData.review3}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Salary Structures Policy *</td>
              <td>
                <select
                  name="review4"
                  value={formData.review4}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Opportunity for Career Advancement *</td>
              <td>
                <select
                  name="review5"
                  value={formData.review5}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Fair Allocation and Allotments of Responsibilities *</td>
              <td>
                <select
                  name="review6"
                  value={formData.review6}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Exposure to Advanced Health Education Technology *</td>
              <td>
                <select
                  name="review7"
                  value={formData.review7}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AlumniFeedback;
