import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, email, avatar }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt="avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;
