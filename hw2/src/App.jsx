import React from "react";
import UserCard from "./UserCard";
import Button from "./Button";
import "./App.css";

function App() {

  const users = [
    { id: 101, name: "Ahmad", email: "ahmad@mail.com" },
    { id: 102, name: "samir", email: "samir@mail.com" },
    { id: 103, name: "Laila", email: "laila@mail.com" },
  ];

  return (
    <div>
      <h1>My Users</h1>

      {users.map((u) => (
        <UserCard key={u.id} name={u.name} email={u.email} />
      ))}

      <Button text="Submit" />
    </div>
  );
}

export default App;