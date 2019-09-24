import React from "react";
import SocialLinkCardPreview from "./SocialLinkCardPreview.js";
import "../stylesheets/scss/components/CardPreview.scss";
import PropTypes from "prop-types";

class CardPreview extends React.Component {
  render() {
    const image = { backgroundImage: `url(${this.props.imageCard})` };

    return (
      <div className="card js-card ">
        <div className="card_header">
          <h1 className={this.props.fullnameClass} data-placeholder={this.props.fullname}>
            {this.props.fullname}
          </h1>
          <p className={this.props.jobClass} data-placeholder={this.props.jobCard}>
            {this.props.jobCard}
          </p>
        </div>
        <div style={image} className="card_img"></div>

        <ul className="card_footer_list">
          <SocialLinkCardPreview linkClass="js-phone card_link" iconCard="fas fa-mobile-alt" socialLink={this.props.phone} />

          <SocialLinkCardPreview linkClass="js-email card_link" socialLink={this.props.email} iconCard="far fa-envelope" />

          <SocialLinkCardPreview linkClass="js-linkedin card_link" socialLink={this.props.linkedinLink} iconCard="fab fa-linkedin-in" />

          <SocialLinkCardPreview linkClass="js-github card_link" socialLink={this.props.githubLink} iconCard="fab fa-github-alt" />
        </ul>
      </div>
    );
  }
}
CardPreview.propTypes = {
  fullnameClass: PropTypes.string,
  fullname: PropTypes.string,
  jobClass: PropTypes.string,
  jobCard: PropTypes.string.isRequired,
  imageCard: PropTypes.string.isRequired,
  userPhone: PropTypes.string,
  userEmail: PropTypes.string,
  linkedinLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired
};

export default CardPreview;
