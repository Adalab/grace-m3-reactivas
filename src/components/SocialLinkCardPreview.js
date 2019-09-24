import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/SocialLinkCardPreview.scss";

const SocialLinkCardPreview = props => {
  const { linkClass, socialLink, iconCard } = props;
  return (
    <li className="card_footer_item">
      {" "}
      <a className={linkClass} data-placeholder="" href={socialLink} target="_blank" rel="noopener noreferrer">
        <i className={iconCard} />
      </a>
    </li>
  );
};

SocialLinkCardPreview.propTypes = {
  linkClass: PropTypes.string.isRequired,
  socialLink: PropTypes.string.isRequired,
  iconCard: PropTypes.string.isRequired
};

export default SocialLinkCardPreview;
