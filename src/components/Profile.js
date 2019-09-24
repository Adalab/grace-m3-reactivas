import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <div className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
      </div>
    );
  }
}

export default Profile;
