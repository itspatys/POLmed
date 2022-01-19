import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./containers/Navbar";
import DoctorContainer from "./containers/doctorContainer";
import Appointments from "./containers/Appointments";
import Confirm from "./containers/Confirm";
const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<DoctorContainer />} />
					<Route path="/appointments/:id" element={<Appointments />} />
					<Route path="/confirm" element={<Confirm />} />
				</Routes>
			</Router>
		</>
	);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
