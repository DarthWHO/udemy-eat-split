import Friend from "./Friend";
import Button from "./Button";

export default function Friends({ friends }) {
  const displayFriends = friends.map((friend) => (
    <Friend key={friend.id} friend={friend} />
  ));

  return <ul>{displayFriends}</ul>;
}
