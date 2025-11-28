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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const toggleAddFriend = () => {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FriendAdd onFriendAdd={handleAddFriend} />}
        <Button onClick={toggleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <Split friend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
