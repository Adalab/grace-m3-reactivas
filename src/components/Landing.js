import React from "react";
import logoAdalab from "../images/logo-adalab-80px.png";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import MainDescription from "./MainDescription";
import SquareFontawesomeIcons from "./SquareFontawesomeIcons";
import MainButton from "./MainButton";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="main">
      <div className="main_content">
        <MainDescription foto={awesomeProfilePic} mainTitle="Crea tu tarjeta de visita" mainText="Crea mejores contactos profesionales de forma fácil y cómoda" />
        <SquareFontawesomeIcons />
        <MainButton />
      </div>
      <Footer url="https://www.adalab.es" foto={logoAdalab} title="Awesome profile-cards @ Sense.JS 2019" />
    </div>
  );
}

export default Landing;
