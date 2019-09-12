import React from 'react';
import '../stylesheets/scss/main.scss';

function ResetButton(props) {
	return (
		<button className="card_button-reset js-reset">
			{' '}
			<i className={props.icon}></i> {props.name}
		</button>
	);
}

export default ResetButton;
