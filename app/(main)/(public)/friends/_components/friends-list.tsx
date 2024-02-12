import { IFriends } from "@/types/friends";
import FriendsItem from "./friends-item";

interface IFriendsListProps {
  friends: IFriends[];
}

const FriendsList = ({ friends }: IFriendsListProps) => {
  return (
    <ul className="mt-10">
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendsItem friendsItem={friend} />;
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
