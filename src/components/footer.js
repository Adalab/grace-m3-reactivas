import React from "react";
import logoAdalab from "../images/logo-adalab-80px.png";
import "../stylesheets/scss/main.scss";

function Footer() {
    return (
        <footer className="footer"> 
        <small className="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
        <a className="footer_link" href="http://www.adalab.es" target="_blank" rel="noopener noreferrer">
            <img className="footer_img" src={logoAdalab} alt="Logo Adalab"/>
        </a>
    </footer>
    )
}

export default Footer;