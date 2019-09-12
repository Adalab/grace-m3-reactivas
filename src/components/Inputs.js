/* eslint-disable no-unused-expressions */
import React from "react";

const Input = props => (
  <div class="fill-in_item">
    <label className="fill-in_label" htmlFor={props.id}>
      {props.label}
    </label>
    <input className={`fill-in_input ${props.classInput}`} id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} minLength={props.minLength} pattern={props.pattern} required></input>
  </div>
);

export default Input;
