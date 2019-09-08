/* eslint-disable no-unused-expressions */
import React from "react";

const InputText = props => (
  <>
    <label className="fill-in_label" for={props.id}>
      {props.label}
    </label>
    <input className={`fill-in_input ${props.classInput}`} id={props.id} type="text" name={props.name} placeholder={props.placeholder} required></input>
  </>
);
const InputTel = props => (
  <>
    <label className="fill-in_label" for={props.id}>
      {props.label}
    </label>
    <input className={`fill-in_input ${props.classInput}`} id={props.id} type="tel" name={props.name} placeholder={props.placeholder} minlength={props.minLength} pattern={props.pattern}></input>
  </>
);

const InputEmail = props => (
  <>
    <label className="fill-in_label" for={props.id}>
      {props.label}
    </label>
    <input className={`fill-in_input ${props.classInput}`} id={props.id} type="text" name={props.name} placeholder={props.placeholder} pattern={props.pattern} required></input>
  </>
);

export { InputText, InputTel, InputEmail };
