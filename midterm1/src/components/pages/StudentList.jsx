import { useEffect, useState, useCallback } from "react";
import StudentCard from "../components StudentCard"
import React from "react";
import "./UserCard.css";
import { StudentCard } from "../StudentCards";

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <span>{props.email}</span>
    </div>
  );
}

export default UserCard;