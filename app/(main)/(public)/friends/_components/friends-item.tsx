import { IFriends } from "@/types/friends";
import Image from "next/image";

interface IFriendsItemProps {
  friendsItem: IFriends;
}

const FriendsItem = ({ friendsItem }: IFriendsItemProps) => {
  return (
    <div className="flex flex-col bg-white rounded-[15px]">
      <div className="w-[88px] h-8 bg-[#FFF4DF] rounded-[30px] self-end justify-center">
        <p className="text-xs text-[#F6B83D]">{friendsItem.workHours}</p>
      </div>
      <div className="">
        <h3 className="text-base font-bold text-[#262626]">
          {friendsItem.title}
        </h3>
        <Image
          src={friendsItem.imageUrl}
          alt="Company logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-[rgba(38,38,38, 0.5)]">
          Email:{" "}
          <span className="text-sm text-[#262626]">{friendsItem.email}</span>
        </p>
        <p className="text-sm text-[rgba(38,38,38, 0.5)]">
          Address:{" "}
          <span className="text-sm text-[#262626]">{friendsItem.address}</span>
        </p>
        <p className="text-sm text-[rgba(38,38,38, 0.5)]">
          Phone:{" "}
          <span className="text-sm text-[#262626]">{friendsItem.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default FriendsItem;
