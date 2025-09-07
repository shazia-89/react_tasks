import React from "react";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <span>{props.email}</span>
    </div>
  );
}

export default UserCard;