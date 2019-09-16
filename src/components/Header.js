import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/scss/components/Header.scss";

const Header = props => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img
            className="header_container_img"
            src={props.foto}
            alt={props.alt}
          />
        </Link>
      </div>
    </div>
  );
};
export default Header;
