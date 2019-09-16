/* eslint-disable no-unused-expressions */
import React from 'react';

const Input = props => (
  <div className="fill-in_item">
    <label className="fill-in_label" htmlFor={props.idLabel}>
      {props.label}
    </label>
    <input className={`fill-in_input ${props.classnameinput}`} id={props.idInput} type={props.type} name={props.name} placeholder={props.placeholder} minLength={props.minLength} pattern={props.pattern} required></input>
  </div>
);

export default Input;
