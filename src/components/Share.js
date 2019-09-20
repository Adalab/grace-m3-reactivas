import React from "react";
import ShareButton from "./ShareButton";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "hidden",
      twitterData: ""
    };

    this.createCard = this.createCard.bind(this);
    this.handleHiddenClass = this.handleHiddenClass.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  handleHiddenClass() {
    this.setState({
      class: ""
    });
  }

  createCard(ev) {
    ev.preventDefault();
    this.handleHiddenClass();
    this.sendRequest(this.props.localStorageData);
  }

  sendRequest(localStorageData) {
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(localStorageData)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          twitterData: data.success === true ? data.cardURL : "ERROR: rellena todos los datos"
        });
      });
  }

  render() {
    return (
      <section>
        <div className="js-collapsible-content">
          <div className="share_button">
            <button type="submit" className="share_button_img" onClick={this.createCard}>
              {" "}
              <i className="share_button_img_icon far fa-address-card" />
              {this.props.title}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Share;
