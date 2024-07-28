/** @format */

import React from 'react';

function GrievanceFeedback() {
  return (
    <div className='grievance-feedback'>
      <h1>Grievance Feedback</h1>
      <p>Send your valuable feedback</p>
      <form>
        <div>
          <label htmlFor="session">Session *</label>
          <input type="text" id="session" />
        </div>
        <div>
          <label htmlFor="courseName">Course Name *</label>
          <input type="text" id="courseName" />
        </div>
        <div>
          <label htmlFor="term">Term *</label>
          <input type="text" id="term" />
        </div>
        <div>
          <label htmlFor="facultyName">Faculty Name *</label>
          <input type="text" id="facultyName" />
        </div>
        <div>
          <label htmlFor="fatherName">Father Name *</label>
          <input type="text" id="fatherName" />
        </div>
        <div>
          <label htmlFor="email">E-Mail *</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile No *</label>
          <input type="text" id="mobileNo" />
        </div>
        <div>
          <label htmlFor="grievance">Write To Grievance</label>
          <textarea id="grievance" />
        </div>
        <button type="submit">Submit Your Feedback</button>
      </form>
      
    </div>
  );
}

export default GrievanceFeedback;
