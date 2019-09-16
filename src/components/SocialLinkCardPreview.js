import React from 'react';
import '../stylesheets/scss/components/SocialLinkCardPreview.scss';

const SocialLinkCardPreview = props => {
  return (
    <li className="card_footer_item">
      {' '}
      {
        <a className={props.linkClass} href="" data-placeholder="" data-prefix={props.socialLink} target="_blank">
          <i className={props.iconCard} />
        </a>
      }
    </li>
  );
};

export default SocialLinkCardPreview;
