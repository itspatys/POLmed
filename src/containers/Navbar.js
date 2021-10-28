import React from 'react'
import logo from "./../assets/img/logo.png"
import "./../assets/style/Navbar.css"

const Navbar = () => {
    return(
        <>
            <div className="navbar-container">
                <div>
                    <div className="navbar-logo">
                        <img src={logo}></img>
                    </div>
                </div>
                <div>
                    <div className="navbar-link">Wizyty</div>
                    <div className="navbar-link">Cennik</div>
                    <div className="navbar-link">Kontakt</div>
                </div>
                <div>
                    <div className="navbar-link">Profil</div>
                    <div className="navbar-link navbar-link-logout">Wyloguj</div>
                </div>
            </div>
        </>
    )
}

export default Navbar