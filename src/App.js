import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./containers/Navbar";
import DoctorContainer from "./containers/doctorContainer";

const App = () => {
	return (
		<>
			<Navbar />
			<DoctorContainer />
		</>
	);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
