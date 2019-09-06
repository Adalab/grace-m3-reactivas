import React from "react";
import logoAdalab from "../images/logo-adalab-80px.png";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import "../stylesheets/scss/main.scss";

function App() {
  return (
    <main className="main">
    <div className="main_content">
        <img className="main_img" src={awesomeProfilePic} />
        <div className="main_description">
             <h1 className="main_title">Crea tu tarjeta de visita</h1>

            <p className="main_text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        </div>
        <div className="main_actions">
            <div className="main_action"> <i className="main_action_icon far fa-object-ungroup"></i>

                <p className="main_action_item">Diseña</p>
            </div>
            <div className="main_action"> <i className="main_action_icon far fa-keyboard"></i>

                <p className="main_action_item">Rellena</p>
            </div>
            <div className="main_action"> <i className="main_action_icon fas fa-share-alt"></i>

                <p className="main_action_item">Comparte</p>
            </div>
        </div>
        <button className="main_button"> <a className="main_button_link" href="./editor.html" target="_self">comenzar</a>

        </button>
    </div>
<div className="footer"> 
<small className="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
    <a
    className="footer_link" href="http://www.adalab.es" target="_blank">
        <img className="footer_img" src={logoAdalab} alt="logo Adalab"/>
        </a>
</div>
</main>

  );

}

export default App;
