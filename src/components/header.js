import React from "react";
import "../stylesheets/scss/components/Header.scss";

const Header = props => {
  return (
    <div className="header">
      <div className="header_container">
        <a href={props.url} target={props.destiny}>
          <img
            className="header_container_img"
            src={props.foto}
            alt={props.alt}
          />
        </a>
      </div>
    </div>
  );
};
export default Header;
