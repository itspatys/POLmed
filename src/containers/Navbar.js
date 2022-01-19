import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/img/logo.png";
import nfzLogo from "./../assets/img/nfz.svg"
import fbLogo from "./../assets/img/fb.svg"
import "./../assets/style/Navbar.css";

const Navbar = () => {
	const updateMenuHandler = (e) => {
		console.log(e.target.parentNode.nextElementSibling);
		e.target.firstChild.firstChild.classList.toggle("is-active");
		e.target.parentNode.nextElementSibling.classList.toggle("is-darken");
		e.target.parentNode.nextElementSibling.nextElementSibling.classList.toggle(
			"is-shown"
		);
	};
	const navigate = useNavigate()
	const handleNavigation = useCallback(() => navigate('/', {replace: true}), [navigate]);
	
	return (
		<>
			<div className="navbar-container">
				<div>
					<div 
						className="navbar-logo"
						onClick={handleNavigation}
					>
						<img src={logo}></img>
					</div>
				</div>
				<div className="navbar-desktop">
					<div className="navbar-link">Wizyty</div>
					<div className="navbar-link">Cennik</div>
					<div className="navbar-link">
						<a href="https://www.nfz.gov.pl/" target="_blank">
							<img className="navbar-icon" src={nfzLogo} alt="logo NFZ" />
						</a>
					</div>
					<div className="navbar-link">
						<a href="https://facebook.com/" target="_blank">
							<img className="navbar-icon" src={fbLogo} alt="logo Facebook" />
						</a>
					</div>
				</div>
				<div className="navbar-desktop">
					
					<div className="navbar-link">Profil</div>
					<div className="navbar-link navbar-link-logout">Wyloguj</div>
				</div>
				<div></div>
				<div
					className="navbar-mobile"
					onClick={(e) => {
						e.stopPropagation();
						updateMenuHandler(e);
					}}
				>
					<div className="navbar-hamburger">
						<div className="hamburger hamburger--3dx">
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-menu-darken is-darken"></div>
			<div className="navbar-menu">
				<div></div>
				<div>Wizyty</div>
				<div>Cennik</div>
				<div>Kontakt</div>
				<div>Profil</div>
				<div>
					<a href="https://www.nfz.gov.pl/" target="_blank">
						<img className="navbar-icon" src={nfzLogo} alt="logo NFZ" />
					</a>
					<span style={{paddinLeft: "10px"}}>&emsp;&ensp;</span>
					<a href="https://facebook.com/" target="_blank">
						<img className="navbar-icon" src={fbLogo} alt="logo Facebook" />
					</a>
				</div>
				<div className="navbar-link-logout">Wyloguj</div>
				<div></div>
			</div>
		</>
	);
};

export default Navbar;
