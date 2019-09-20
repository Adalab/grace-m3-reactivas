import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/scss/components/Header.scss";

const Header = props => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img className="header_container_img" src={props.foto} alt={props.alt} />
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  foto: PropTypes.string,
  alt: PropTypes.string
};
export default Header;
