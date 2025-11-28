import Button from "./Button";
import { useState } from "react";

export default function Split({ friend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  const friendExpense = billValue ? billValue - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill(whoIsPaying === "you" ? friendExpense : -yourExpense);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🧑‍🤝‍🧑 Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />

      <label>👫 {friend.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>💸 Who is paying the bill?</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
