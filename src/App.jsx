import { useState } from "react";
import "./App.css";
import Friends from "./components/Friends";
import FriendAdd from "./components/FriendAdd";
import Split from "./components/Split";
import Button from "./components/Button";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <Friends friends={friends} />
        <FriendAdd />
        <Button onClick={() => console.log("Add Friend")}>Add Friend</Button>
      </div>

      <Split friend={friends[1]} />
    </div>
  );
}

export default App;
