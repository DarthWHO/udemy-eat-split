import Friend from "./Friend";

export default function Friends({ friends, onSelectFriend, selectedFriend }) {
  const displayFriends = friends.map((friend) => (
    <Friend
      key={friend.id}
      friend={friend}
      onSelectFriend={onSelectFriend}
      selectedFriend={selectedFriend}
    />
  ));

  return <ul>{displayFriends}</ul>;
}
