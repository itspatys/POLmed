import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../assets/style/Confirm.css";

const Confirm = (props) => {
	const { state } = useLocation();
	console.log(state.service);
	const parseDate = (time) => {
		const date = time.toLocaleString("pl-PL", {
			month: "short",
			day: "numeric",
		});
		console.log(date);
		let sufix = (time) => {
			switch (time.getDay()) {
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
		};
		return `${sufix(time)} ${date} ${time.getYear() + 1900}`;
	};

	const navigate = useNavigate();
	const redirect = () => {
		navigate("/", {
			replace: true,
		});
	};

	return (
		<>
			<div className="container">
				<div className="service">{state.service}</div>
				<div className="date">{parseDate(state.date)}</div>
				<div className="hour">{state.hour}</div>
				<div className="smol-text">Czy chcesz potwierdzić tą wizytę?</div>
				<button
					onClick={() => {
						redirect();
					}}
				>
					Potwierdź
				</button>
				<br></br>
				<button
					className="cancel-button"
					onClick={() => {
						redirect();
					}}
				>
					Anuluj
				</button>
			</div>
		</>
	);
};

export default Confirm;
