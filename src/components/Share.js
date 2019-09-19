import React from "react";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

const Share = props => {
  return (
    <section>
      <div className="js-collapsible-content">
        <div className="share_button">
          <button type="submit" className="share_button_img">
            {" "}
            <i className="share_button_img_icon far fa-address-card" />
            {props.title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Share;
