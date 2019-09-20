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
    this.sendRequest();
  }

  sendRequest() {
    const data = {
      name: this.props.state.name,
      job: this.props.state.job,
      phone: this.props.state.phone,
      email: this.props.state.email,
      linkedin: this.props.state.linkedin,
      github: this.props.state.github,
      palette: this.props.state.palette,
      photo: this.props.state.profile.photo
    };
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
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

          <ShareButton title="La tarjeta ha sido creada:" icon="completed_content_button_icon fab fa-twitter" name="Compartir en twitter" twitterData={this.state.twitterData} />
        </div>
      </section>
    );
  }
}

export default Share;
