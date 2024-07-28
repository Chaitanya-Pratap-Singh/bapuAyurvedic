/** @format */

import React from "react";
import "./AlumniFeedback.css";

const AlumniFeedback = () => {
    return (
        <div className="alumni-feedback">
            <h1>Alumni Feedback</h1>
            <p>Please provide your feedback below:</p>
            <form>
                <div className="form-group">
                    <label>Session *</label>
                    <select name="session" required>
                        <option value="">Select</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Course Name *</label>
                    <input type="text" name="course-name" required />
                </div>

                <div className="form-group">
                    <label>Term *</label>
                    <input type="text" name="term" required />
                </div>

                <div className="form-group">
                    <label>Alumni Name *</label>
                    <input type="text" name="alumni-name" required />
                </div>

                <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required />
                </div>

                <div className="form-group">
                    <label>Mobile No *</label>
                    <input type="tel" name="mobile-no" required />
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
                                <select name="review1" required>
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
                                <select name="review2" required>
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
                                <select name="review3" required>
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
                                <select name="review4" required>
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
                                <select name="review5" required>
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
                                <select name="review6" required>
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
                                <select name="review7" required>
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
