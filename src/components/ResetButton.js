import React from "react";
import "../stylesheets/scss/main.scss";

function ResetButton() {
  return (
    <button className="card_button-reset js-reset">
      {" "}
      <i className="far fa-trash-alt trash_icon"></i> Reset
    </button>
  );
}

export default ResetButton;
