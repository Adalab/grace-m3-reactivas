import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/SocialLinkCardPreview.scss";

class SocialLinkCardPreview extends React.Component {
  render() {
    return (
      <li className="card_footer_item">
        {" "}
        <a className={this.props.linkClass} data-placeholder="" href={this.props.socialLink} target="_blank" rel="noopener noreferrer">
          <i className={this.props.iconCard} />
        </a>
      </li>
    );
  }
}

SocialLinkCardPreview.propTypes = {
  linkClass: PropTypes.string.isRequired,
  socialLink: PropTypes.string.isRequired,
  iconCard: PropTypes.string.isRequired
};

export default SocialLinkCardPreview;
