/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StudentFeedback from "./components/StudentFeedback";
import "./App.css";
import FacultyFeedback from "./components/FacultyFeedback";
import AlumniFeedback from "./components/AlumniFeedback";
import GrievanceFeedback from "./components/GrievanceFeedback";
import { Toaster } from "react-hot-toast";
const ErrorFallback = () => {
  return (
    <div>
      <h2>Something went wrong.</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
    <Toaster />
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<MainContent />} />
              <Route path="/student-feedback" element={<StudentFeedback />} />
              <Route path="/faculty-feedback" element={<FacultyFeedback />} />
              <Route path="/alumni-feedback" element={<AlumniFeedback />} />
              <Route path="/grievance-feedback" element={<GrievanceFeedback />} />

              


              {/* Add routes for other components as needed */}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
    </>
  );
};

export default App;