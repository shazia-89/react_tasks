<<<<<<< HEAD
import React from "react";
import Timer from "./Timer";
=======
<<<<<<< HEAD
import ToDoList from "./ToDoList";
>>>>>>> c2d869fa73281d7c7a3a2f23c0ee594aedf53a2c

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Timer />
=======
      <ToDoList />
=======
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
>>>>>>> 958d97462a1641749f8f8309490520dc07a6ebb5
>>>>>>> c2d869fa73281d7c7a3a2f23c0ee594aedf53a2c
    </div>
  );
}

export default App;