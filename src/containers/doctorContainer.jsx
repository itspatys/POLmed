import React, { Component } from "react";
import doc1 from "./../assets/img/doctors/doc1.png";
import doc2 from "./../assets/img/doctors/doc2.png";
import doc3 from "./../assets/img/doctors/doc3.png";
import doc4 from "./../assets/img/doctors/doc4.png";
import DoctorComponent from "../components/doctorComponent";
import "./../assets/style/doctorContainer.css";
class DoctorContainer extends Component {
	render() {
		return (
			<div className="doctor-container">
				<DoctorComponent
					title="dr n. med."
					name="Jerzy Michałek"
					status="true"
					img={doc1}
					id={1}
				/>
				<DoctorComponent
					title="dr n. med."
					name="Henryk Kowalski"
					status="false"
					img={doc2}
					id={2}
				/>
				<DoctorComponent
					title="dr n. med."
					name="Magdalena Harnaś"
					status="true"
					img={doc3}
					id={3}
				/>
				<DoctorComponent
					title="dr n. med."
					name="Jerzy Owsiak"
					status="true"
					img={doc4}
					id={4}
				/>
			</div>
		);
	}
}

export default DoctorContainer;
