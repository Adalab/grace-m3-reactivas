/* eslint-disable no-unused-expressions */
import React from "react";

const InputText = props => (
	<div class="fill-in_item">
		<label className="fill-in_label" for={props.id}>
			{props.label}
		</label>
		<input className={`fill-in_input ${props.classInput}`} id={props.id} type="text" name={props.name} placeholder={props.placeholder} required></input>
	</div>
);
const InputTel = props => (
	<div class="fill-in_item">
		<label className="fill-in_label" for={props.id}>
			{props.label}
		</label>
		<input className={`fill-in_input ${props.classInput}`} id={props.id} type="tel" name={props.name} placeholder={props.placeholder} minlength={props.minLength} pattern={props.pattern}></input>
	</div>
);

const InputEmail = props => (
	<div class="fill-in_item">
		<label className="fill-in_label" for={props.id}>
			{props.label}
		</label>
		<input className={`fill-in_input ${props.classInput}`} id={props.id} type="text" name={props.name} placeholder={props.placeholder} pattern={props.pattern} required></input>
	</div>
);

export { InputText, InputTel, InputEmail };
