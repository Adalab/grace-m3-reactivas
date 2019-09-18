import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/SocialLinkCardPreview.scss";

class SocialLinkCardPreview extends React.Component {
  render() {
    return (
      <li className="card_footer_item">
        {" "}
        <a className={this.props.linkClass} href="" data-placeholder="" href={this.props.socialLink} target="_blank">
          <i className={this.props.iconCard} />
        </a>
      </li>
    );
  }
}

SocialLinkCardPreview.propTypes = {
  linkClass: PropTypes.string,
  socialLink: PropTypes.string,
  iconCard: PropTypes.string
};

export default SocialLinkCardPreview;
