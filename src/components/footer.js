import React from "react";
import "../stylesheets/scss/main.scss";

const Footer = props => {
  return (
    <footer className="footer">
      <small className="footer_small">{props.title}</small>
      <a
        className="footer_link"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="footer_img" src={props.foto} alt="Logo Adalab" />
      </a>
    </footer>
  );
};

export default Footer;
