import { IFriends } from "@/types/friends";
import FriendsItem from "./friends-item";

interface IFriendsListProps {
  friends: IFriends[];
}

const FriendsList = ({ friends }: IFriendsListProps) => {
  return (
    <ul className="mt-10 md:flex md:flex-wrap md:justify-center gap-5 md:mt-11 lg:mt-[60px] lg:gap-y-7">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="md:last:mr-auto lg:last:mr-0">
            <FriendsItem friendsItem={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
