import Button from "./Button";

export default function Friend({ friend }) {

  let balanceMessage;
  let balanceColor;

  if (friend.balance < 0) {
    balanceMessage = `You owe ${friend.name} $${Math.abs(friend.balance)}`;
    balanceColor = "red";
  } else if (friend.balance > 0) {
    balanceMessage = `${friend.name} owes you $${friend.balance}`;
    balanceColor = "green";
  } else {
    balanceMessage = `You and ${friend.name} are even`;
    balanceColor = "";
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={balanceColor}>{balanceMessage}</p>
      <Button onClick={() => console.log("Select Friend")}>Select</Button>
    </li>
  );
}
