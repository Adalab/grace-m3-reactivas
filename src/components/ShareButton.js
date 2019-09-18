import React from 'react';
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

function ShareButton(props) {
	return (
		<button type="submit" className="completed_content_button">
			{' '}
			<a href="" className="completed_content_button_twitter" target="_blank">
				{/* aquí iría la funcionalidad para general link */}
				<i className={props.icon}></i>
				{props.name}
			</a>
		</button>
	);
}

export default ShareButton;
