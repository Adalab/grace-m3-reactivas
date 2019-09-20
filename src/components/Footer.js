import React from "react";
import "../stylesheets/scss/components/Footer.scss";

const Footer = props => {
  return (
    <footer className="footer">
      <small className="footer_small">{props.title}</small>
      <a
        href={props.url}
        className="footer_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="footer_img" src={props.foto} alt="Logo Adalab" />
      </a>
    </footer>
  );
};

export default Footer;