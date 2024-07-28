/** @format */

import React from "react";
import "./StudentFeedback.css";

const StudentFeedback = () => {
	return (
		<div className="student-feedback">
			<h1>Student Feedback</h1>
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
					<label>Student Name *</label>
					<input type="text" name="student-name" required />
				</div>

				<div className="form-group">
					<label>Father Name *</label>
					<input type="text" name="father-name" required />
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
							<td>Skill Laboratory and Simulation Lab *</td>
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
							<td>Support of Faculty for any difficulty in Learning *</td>
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
							<td>Clinical Posting and Exposure *</td>
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
							<td>Indoor and Outdoor Sports Facilities *</td>
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
							<td>Central Library Facility *</td>
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
							<td>Safety Measures in Campus *</td>
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
							<td>
								Perceived Career in Ayurveda/Indian System of Medicine vis-a-vis
								Modern Medicine *
							</td>
							<td>
								<select name="review7" required>
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Perceived Career Support Facilities & Programs *</td>
							<td>
								<select name="review8" required>
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

export default StudentFeedback;
