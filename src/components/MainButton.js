import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/scss/pages/Landing.scss";
import "../stylesheets/scss/components/Share.scss";


function MainButton() {
  return (
    <button className="main_button">
      <Link to="/editor" className="main_button_link">
        Comenzar
      </Link>
    </button>
  );
}

// Añadir props en link y en el contenido (Comenzar")

export default MainButton;
