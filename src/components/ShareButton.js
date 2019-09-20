import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/Share.scss";

// TwitterData is undefined
const ShareButton = props => {
  const { twitterData } = props;
  console.log(twitterData);

  return (
    <div className="completed_content hidden">
      <h3 className="completed_content_title">{props.title}</h3>
      <a href={`${twitterData}`} className="completed_content_url" target="_self" rel="noopener noreferrer">
        {twitterData}
      </a>
      <button type="submit" className="completed_content_button" style={props.style}>
        {" "}
        <a href={`https://twitter.com/intent/tweet?text=Aqui tienes mi tarjeta: ${twitterData}`} className="completed_content_button_twitter" target="_blank" rel="noopener noreferrer">
          <i className={props.icon}></i>
          {props.name}
        </a>
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};

export default ShareButton;
