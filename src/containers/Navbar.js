import React from "react";
import logo from "./../assets/img/logo.png";
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

	return (
		<>
			<div className="navbar-container">
				<div>
					<div className="navbar-logo">
						<img src={logo}></img>
					</div>
				</div>
				<div className="navbar-desktop">
					<div className="navbar-link">Wizyty</div>
					<div className="navbar-link">Cennik</div>
					<div className="navbar-link">Kontakt</div>
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
				<div className="navbar-link-logout">Wyloguj</div>
				<div></div>
			</div>
		</>
	);
};

export default Navbar;
