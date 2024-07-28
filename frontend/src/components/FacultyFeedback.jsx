/** @format */

import React from "react";
import "./FacultyFeedback.css";

const FacultyFeedback = () => {
	return (
		<div className="faculty-feedback">
			<h1>Faculty Feedback</h1>
			<p>Please provide your feedback below:</p>
			<form>
				<div className="form-group">
					<label htmlFor="session">Session *</label>
					<select id="session" name="session" required>
						<option value="">Select</option>
						<option value="2024">2024</option>
						<option value="2023">2023</option>
						<option value="2022">2022</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="course-name">Course Name *</label>
					<input type="text" id="course-name" name="course-name" required />
				</div>

				<div className="form-group">
					<label htmlFor="term">Term *</label>
					<input type="text" id="term" name="term" required />
				</div>

				<div className="form-group">
					<label htmlFor="faculty-name">Faculty Name *</label>
					<input type="text" id="faculty-name" name="faculty-name" required />
				</div>

				<div className="form-group">
					<label htmlFor="father-name">Father Name *</label>
					<input type="text" id="father-name" name="father-name" required />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email *</label>
					<input type="email" id="email" name="email" required />
				</div>

				<div className="form-group">
					<label htmlFor="mobile-no">Mobile No *</label>
					<input type="tel" id="mobile-no" name="mobile-no" required />
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
							<td>Exposure to Advanced Health Education Technology</td>
							<td>
								<select name="review7">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Faculty Welfare and Amenities</td>
							<td>
								<select name="review8">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>9</td>
							<td>Accommodations for Staff</td>
							<td>
								<select name="review9">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>10</td>
							<td>Work Load</td>
							<td>
								<select name="review10">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>11</td>
							<td>Recognition and Importance</td>
							<td>
								<select name="review11">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>12</td>
							<td>Motivating Work Environment</td>
							<td>
								<select name="review12">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>13</td>
							<td>Perceived Reputation of the College</td>
							<td>
								<select name="review13">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>14</td>
							<td>Academic Freedom and Flexibility</td>
							<td>
								<select name="review14">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>15</td>
							<td>Recommending College Among BAMS Aspirants for Admission</td>
							<td>
								<select name="review15">
									<option value="">Select</option>
									<option value="available">Available</option>
									<option value="not-available">Not Available</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>16</td>
							<td>Recommending College for Jobs</td>
							<td>
								<select name="review16">
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

export default FacultyFeedback;
