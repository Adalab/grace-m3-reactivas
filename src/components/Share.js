import React from "react";
import Loader from "react-loader-spinner";
import "../stylesheets/scss/main.scss";

class Share extends React.Component {
  render() {
    const { state, actionShare } = this.props;
    return (
      <React.Fragment>
        <div className="js-collapsible-content">
          <div className="share_button">
            <button
              type="submit"
              className="share_button_img"
              onClick={actionShare}
            >
              <i className="share_button_img_icon far fa-address-card" />
              Crear tarjeta
            </button>
          </div>
        </div>
        {state.urlAPI === "" && state.shareButton === "clicked" ? (
          <div className="loader">
            <Loader type="ThreeDots" color="#9c9c9c" height="50" width="50" />
          </div>
        ) : null}
        {state.urlError !== "" ? (
          <div className="error__container">
            <p className="error__message">
              ¡Ups!
              <span>
                <img src="" alt="" />
                💀
              </span>{" "}
              Rellena los campos obligatorios{" "}
              <span>
                <img src="" alt="" />
                💀
              </span>
            </p>
          </div>
        ) : (
          <div
            className={`completed_content ${
              state.urlAPI === "" ? "hidden" : ""
            }`}
          >
            <React.Fragment>
              <h3 className="completed_content_title">
                La tarjeta ha sido creada:
              </h3>
              <a className="completed_content_url" href={`${state.urlAPI}`}>
                {state.urlAPI}
              </a>
              <button type="submit" className="completed_content_button">
                <a href="" className="completed_content_button_twitter">
                  <i className="completed_content_button_icon fab fa-twitter"></i>
                  Compartir en twitter
                </a>
              </button>
            </React.Fragment>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Share;
