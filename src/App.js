import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./containers/Navbar"

const App = () => {
	return(
		<>
			<Navbar />
		</>
	);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
