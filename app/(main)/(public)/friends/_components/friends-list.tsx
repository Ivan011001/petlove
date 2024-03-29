import { IFriend } from "@/types";
import FriendsItem from "./friends-item";

interface IFriendsListProps {
  friends: IFriend[];
}

const FriendsList = ({ friends }: IFriendsListProps) => {
  return (
    <ul className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:mt-11 lg:mt-[60px] lg:gap-y-7">
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendsItem friendsItem={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
