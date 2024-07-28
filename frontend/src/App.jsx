/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StudentFeedback from "./components/StudentFeedback";
import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Sidebar />
				<div className="content">
					<Switch>
						<Route exact path="/" component={MainContent} />
						<Route path="/student-feedback" component={StudentFeedback} />
						{/* Add routes for other components as needed */}
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default App;
