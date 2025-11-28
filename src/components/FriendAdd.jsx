import Button from "./Button"

export default function FriendAdd() {
  return (
    <form className="form-add-friend">
      <label>👫 Name</label>
      <input type="text" placeholder="Friend's name" />
      <label>🖼️ Image URL</label>
      <input type="text" placeholder="https://i.pravatar.cc/48?u=" />
      <Button onClick={() => console.log("Friend Added")}>Add</Button>
    </form>
  );
}