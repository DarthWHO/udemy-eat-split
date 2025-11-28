import Button from "./Button";

export default function Split({ friend }) {
  return <form action="" className="form-split-bill">
    <h2>Split a bill with {friend.name}</h2>
    <label>💰 Bill Value</label>
    <input type="text" />
    <label>🧑‍🤝‍🧑 Your Expense</label>
    <input type="text" />
    <label>👫 {friend.name}'s Expense</label>
    <input type="text" disabled />
    <label>💸 Who is paying the bill?</label>
    <select name="" id="">
      <option value="you">You</option>
      <option value="friend">{friend.name}</option>
    </select>
    <Button>Split Bill</Button>
  </form>;
}