import React from 'react';
import '../stylesheets/scss/components/SocialLinkCardPreview.scss';

class SocialLinkCardPreview extends React.Component {
  render() {
    return (
      <li className="card_footer_item">
        {' '}
        <a className={this.props.linkClass} href="" data-placeholder="" href={this.props.socialLink} target="_blank">
          <i className={this.props.iconCard} />
        </a>
      </li>
    );
  }
}

export default SocialLinkCardPreview;
