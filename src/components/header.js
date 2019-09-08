import React from "react";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import "../stylesheets/scss/main.scss";

function Header() {
    return (
        <div className="header">
            <div className="header_container"> 
            <a href="./index.html" target="_self">
            <img className="header_container_img" src={awesomeProfilePic} alt="AwesomeProfileCards" />
            </a>
        </div>
        </div>
    )
}
export default Header;