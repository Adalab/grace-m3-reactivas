import React from "react";

const Profile = props => {
  const { avatar } = props;
  return (
    <div className="profile">
      <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }}></div>
    </div>
  );
};

export default Profile;
