import React from 'react';

const SocialLinkCardPreview = (props) => {
  return (
    <li className="card_footer_item">
      {' '}
      <a className={props.linkClass} href="" data-placeholder="" data-prefix={props.socialLink}target="_blank">
        <i className={props.iconCard}></i>
      </a>
    </li>
  );
};

export default SocialLinkCardPreview;
