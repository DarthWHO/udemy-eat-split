import Button from "./Button";
import { useState } from "react";

export default function FriendAdd({ onFriendAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name,
      image: `${image}${id}`,
      balance: 0,
    };

    onFriendAdd(newFriend);
  };

  return (
    <form className="form-add-friend">
      <label>👫 Name</label>
      <input
        type="text"
        placeholder="e.g. Jane Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}
