import React from 'react';
import SocialLinkCardPreview from './SocialLinkCardPreview.js';
import '../stylesheets/scss/components/CardPreview.scss';
import Input from './Inputs';

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <SocialLinkCardPreview linkClass="js-phone card_link" iconCard="fas fa-mobile-alt" />

          <SocialLinkCardPreview linkClass="js-email card_link" socialLink="mailto:" iconCard="far fa-envelope" />

          <SocialLinkCardPreview linkClass="js-linkedin card_link" socialLink="https://www.linkedin.com/in/" iconCard="fab fa-github-alt" />

          <SocialLinkCardPreview linkClass="js-github card_link" socialLink="https://github.com/" iconCard="fab fa-linkedin-in" />
        </ul>
      </div>
    );
  }
}

export default CardPreview;
