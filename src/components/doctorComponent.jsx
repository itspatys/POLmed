import React, { Component } from "react";
import "./../assets/style/doctorComponent.css";
class DoctorComponent extends Component {
	render() {
		console.log(this.props.img);
		return (
			<div className="doctor-elem">
				<div className="image-container">
					<div className="white-cover">
						<img src={this.props.img} alt="" />
					</div>
				</div>
				<div className="doctor-info">
					<div>
						{this.props.title}
						<br />
						{this.props.name}
					</div>
					<div className="doctor-status">{this.setStatusText()}</div>
				</div>
				<div className={this.setStatusButtonClass()}>
					<div>{this.setStatusButtonText()}</div>
				</div>
				<div className={this.setStatusColor()}></div>
			</div>
		);
	}
	setStatusButtonClass() {
		return this.props.status == "true"
			? "doctor-button"
			: "doctor-button doctor-button-disabled";
	}
	setStatusButtonText() {
		return this.props.status == "true" ? `Umów się teraz` : "Brak terminów";
	}

	setStatusColor() {
		return this.props.status == "true" ? "status-bar-green" : "status-bar-red";
	}

	setStatusText() {
		return this.props.status == "true"
			? "Terminy w tym tygodniu"
			: "Brak terminów w tym tygodniu";
	}
}
export default DoctorComponent;
