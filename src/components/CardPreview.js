import React from 'react';
import SocialLinkCardPreview from './SocialLinkCardPreview.js';
import '../stylesheets/scss/components/CardPreview.scss';
import Input from './Inputs';

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  // userEmail: '',
  //     userLinkedin: '',
  //     userGithub: '',
  // {this.updatePreviewLinkedin()}

  render() {
    return (
      <div className="card js-card">
        <div className="card_header">
          <h1 className={this.props.fullnameClass} data-placeholder={this.props.fullname}>
            {this.props.fullname}{' '}
          </h1>
          <p className={this.props.jobClass} data-placeholder={this.props.jobCard}>
            {this.props.jobCard}
          </p>
        </div>
        <div className={this.props.imageCard} />
        <ul className="card_footer_list">
          <SocialLinkCardPreview linkClass="js-phone card_link" iconCard="fas fa-mobile-alt" socialLink={this.props.userPhone} />

          <SocialLinkCardPreview linkClass="js-email card_link" socialLink={this.props.userEmail} iconCard="far fa-envelope" />

          <SocialLinkCardPreview linkClass="js-linkedin card_link" socialLink={this.props.linkedinLink} iconCard="fab fa-linkedin-in" />

          <SocialLinkCardPreview linkClass="js-github card_link" socialLink={this.props.githubLink} iconCard="fab fa-github-alt" />
        </ul>
      </div>
    );
  }
}

export default CardPreview;
