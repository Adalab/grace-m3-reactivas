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
    this.changeButtonColor = this.changeButtonColor.bind(this);

  }

  isValidData() {
    const data = this.props.state;
    return data.email && data.github && data.job && data.email && data.linkedin && data.name !== ""
  }

  changeButtonColor() {
    if (this.isValidData()) {
      const clase = "share_button_img ableButton";
      return clase

    } else {
      const clase = "share_button_img disableButton";
      return clase

    }
  }

  handleHiddenClass() {
    this.setState({
      class: ""
    });
  }

  createCard(ev) {
    ev.preventDefault();
    if (this.isValidData()) {
      this.handleHiddenClass();
      this.sendRequest();
    }
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
    console.log(this.props.state)

    return (
      <section>
        <div className="js-collapsible-content">
          <div className="share_button">
            <button type="submit" className={this.changeButtonColor()} onClick={this.createCard} disabled={!this.isValidData()}>
              {" "}
              <i className="share_button_img_icon far fa-address-card" />
              {this.props.title}
            </button>
          </div>
          <a href={`${this.state.twitterData}`} className="share_button_link">
            {this.state.twitterData}
          </a>
        </div>
      </section>
    );
  }
}

export default Share;
