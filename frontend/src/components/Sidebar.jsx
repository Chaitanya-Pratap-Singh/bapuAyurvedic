import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-skype"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student-feedback">Student Feedback</Link></li>
          <li><Link to="#">Faculty Feedback</Link></li>
          <li><Link to="#">Alumni Feedback</Link></li>
          <li><Link to="#">Grievance Cell</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
