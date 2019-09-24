import React from "react";
import SocialLinkCardPreview from "./SocialLinkCardPreview.js";
import "../stylesheets/scss/components/CardPreview.scss";
import PropTypes from "prop-types";

const CardPreview = props => {
  const { imageCard, fullnameClass, fullname, jobClass, jobCard, phone, email, linkedinLink, githubLink } = props;
  const image = { backgroundImage: `url(${imageCard})` };

  return (
    <div className="card js-card ">
      <div className="card_header">
        <h1 className={fullnameClass} data-placeholder={fullname}>
          {fullname}
        </h1>
        <p className={jobClass} data-placeholder={jobCard}>
          {jobCard}
        </p>
      </div>
      <div style={image} className="card_img"></div>

      <ul className="card_footer_list">
        <SocialLinkCardPreview linkClass="js-phone card_link" iconCard="fas fa-mobile-alt" socialLink={phone} />

        <SocialLinkCardPreview linkClass="js-email card_link" socialLink={email} iconCard="far fa-envelope" />

        <SocialLinkCardPreview linkClass="js-linkedin card_link" socialLink={linkedinLink} iconCard="fab fa-linkedin-in" />

        <SocialLinkCardPreview linkClass="js-github card_link" socialLink={githubLink} iconCard="fab fa-github-alt" />
      </ul>
    </div>
  );
};

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
