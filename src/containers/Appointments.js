import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../assets/style/Appointments.css";

const Appointments = (props) => {
	const [appointments, setAppointments] = useState({
		1: {
			"10:00": false,
			"10:30": false,
			"11:00": false,
			"11:30": false,
			"12:00": false,
			"12:30": false,
			"13:00": false,
			"13:30": false,
			"14:00": false,
			"14:30": false,
			"15:00": false,
			"15:30": false,
			"16:00": false,
			"16:30": false,
			"17:00": false,
			"17:30": false,
		},
		2: {
			"10:00": false,
			"10:30": false,
			"11:00": false,
			"11:30": false,
			"12:00": false,
			"12:30": false,
			"13:00": false,
			"13:30": false,
			"14:00": false,
			"14:30": false,
			"15:00": false,
			"15:30": false,
			"16:00": false,
			"16:30": false,
			"17:00": false,
			"17:30": false,
		},
		3: {
			"10:00": false,
			"10:30": false,
			"11:00": false,
			"11:30": false,
			"12:00": false,
			"12:30": false,
			"13:00": false,
			"13:30": false,
			"14:00": false,
			"14:30": false,
			"15:00": false,
			"15:30": false,
			"16:00": false,
			"16:30": false,
			"17:00": false,
			"17:30": false,
		},
		4: {
			"10:00": false,
			"10:30": false,
			"11:00": false,
			"11:30": false,
			"12:00": false,
			"12:30": false,
			"13:00": false,
			"13:30": false,
			"14:00": false,
			"14:30": false,
			"15:00": false,
			"15:30": false,
			"16:00": false,
			"16:30": false,
			"17:00": false,
			"17:30": false,
		},
		5: {
			"10:00": false,
			"10:30": false,
			"11:00": false,
			"11:30": false,
			"12:00": false,
			"12:30": false,
			"13:00": false,
			"13:30": false,
			"14:00": false,
			"14:30": false,
			"15:00": false,
			"15:30": false,
			"16:00": false,
			"16:30": false,
			"17:00": false,
			"17:30": false,
		},
	});
	const [services, setServices] = useState(["Ładowanie..."]);
	const [hours, setHours] = useState([
		["10:00", false],
		["10:30", false],
		["11:00", false],
		["11:30", false],
		["12:00", false],
		["12:30", false],
		["13:00", false],
		["13:30", false],
		["14:00", false],
		["14:30", false],
		["15:00", false],
		["15:30", false],
		["16:00", false],
		["16:30", false],
		["17:00", false],
		["17:30", false],
	]);
	const [chosenHour, setChosenHour] = useState("00:00");
	const [chosenService, setChosenService] = useState(-1);
	const [chosenDay, setChosenDay] = useState(-1);

	const [chosenDate, setChosenDate] = useState();
	let { id } = useParams();

	window.dateOffset = 0;

	Date.prototype.addDays = (days) => {
		var date = new Date();
		date.setDate(date.getDate() + days);
		return date;
	};

	const fetchAppointments = (id) => {
		fetch(`/api/appointments/${id}.json`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((fetchedData) => {
				setAppointments(fetchedData);
			});
	};

	const fetchServices = () => {
		fetch(`/api/pricing/services.json`, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((fetchedData) => {
				setServices(fetchedData.services);
			});
	};
	const navigate = useNavigate();
	const redirect = () => {
		navigate("/confirm", {
			state: {
				service: services[chosenService],
				date: chosenDate,
				hour: chosenHour,
				id: id
			},
		});
	};

	useEffect(() => {
		window.dateOffset = 0;
		fetchAppointments(id);
		fetchServices();
	}, []);

	return (
		<div className="appointments-container">
			<div className="appointments-heaning">
				Wybierz interesujący Cię dzień spośród najbliższych dni
				roboczych:
			</div>
			<div className="appointments-dates">
				{Object.values(appointments).map((day, index) => {
					let dateClass = "";
					let date = new Date().addDays(index + window.dateOffset);

					while (date.getDay() == 0 || date.getDay() == 6) {
						window.dateOffset++;
						date.setDate(date.getDate() + 1);
					}
					if (Object.values(day).includes(true)) {
						dateClass = "appointment-date appointment-date-avail";
					} else {
						dateClass = "appointment-date appointment-date-notavail";
					}

					if (index == chosenDay) dateClass += " appointment-date-selected";

					return (
						<div
							key={`date${index}`}
							className={dateClass}
							onClick={() => {
								const newHoursState = [];
								for (const [key, value] of Object.entries(
									appointments[index]
								)) {
									newHoursState.push([key, value]);
								}
								setHours(newHoursState);
								setChosenDay(index);
								setChosenHour("00:00");
								setChosenDate(date);
							}}
						>
							<span>{date.getDate()}</span>
							<span>
								<br />
								{(() => {
									switch (date.getDay()) {
										case 0:
											return "ndz";
										case 1:
											return "pon";
										case 2:
											return "wt";
										case 3:
											return "śr";
										case 4:
											return "czw";
										case 5:
											return "pt";
										case 6:
											return "sob";
										default:
											return "N/A";
									}
								})()}
							</span>
						</div>
					);
				})}
			</div>
			<div className="appointments-heaning">Wybierz godzinę wizyty:</div>
			<div className="appointments-hours">
				{hours.map((hour, index) => {
					return (
						<div
							key={`key${index}`}
							className={
								(hour[1] == false ? "appointments-hours-not-avail" : "") +
								(hour[0] == chosenHour ? "appointments-hours-selected" : "")
							}
							onClick={() => {
								setChosenHour(hour[0]);
							}}
						>
							{hour[0]}
						</div>
					);
				})}
			</div>
			<div className="appointments-heaning">Wybierz cel wizyty:</div>
			<div className="appointments-pricing">
				{services.map((service, index) => {
					return (
						<div
							onClick={() => {
								setChosenService(index);
							}}
							key={`service${index}`}
							className={
								(service[0] == "Ładowanie..."
									? "appointments-pricing-not-avail "
									: "") +
								(chosenService == index ? "appointments-pricing-selected " : "")
							}
						>
							{service}
						</div>
					);
				})}
			</div>
			<button
				disabled={
					chosenHour != "00:00" && chosenService != -1 && chosenDay != -1
						? false
						: true
				}
				onClick={redirect}
			>
				Zarejestruj swoją wizytę
			</button>
		</div>
	);
};

export default Appointments;
