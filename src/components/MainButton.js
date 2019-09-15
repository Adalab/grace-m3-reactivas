import React from "react";
import "../stylesheets/scss/main.scss";

function MainButton() {
  return (
    <button className="main_button">
      <a className="main_button_link" href="./editor.html" target="_self">
        comenzar
      </a>
    </button>
  );
}

// Añadir props en link y en el contenido (Comenzar")

export default MainButton;
