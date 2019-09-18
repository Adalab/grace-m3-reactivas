import React from "react";
import "../stylesheets/scss/components/ResetButton.scss";

function ResetButton(props) {
  return (
    <button className="card_button-reset js-reset" onClick={props.action}>
      {" "}
      <i className={props.icon}></i> {props.name}
    </button>
  );
}

export default ResetButton;
