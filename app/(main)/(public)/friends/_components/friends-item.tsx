import { IFriends } from "@/types/friends";
import Image from "next/image";

interface IFriendsItemProps {
  friendsItem: IFriends;
}

const FriendsItem = ({ friendsItem }: IFriendsItemProps) => {
  return (
    <div className="flex flex-col bg-white rounded-[15px] pr-3 pt-3 pl-5 pb-10 md:w-[342px] lg:w-[371px]">
      <div className="w-[88px] h-8 bg-[#FFF4DF] rounded-[30px] self-end flex items-center justify-center md:w-[102px] md:h-[34px]">
        <p className="text-xs text-[#F6B83D] md:text-sm">
          {friendsItem.workHours}
        </p>
      </div>
      <div className="flex">
        <div className="mr-[14px]">
          <Image
            src={friendsItem.imageUrl}
            alt="Company logo"
            width={80}
            height={80}
            className="md: w-[90px] md:h-[90px]"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-[#262626] mb-[14px]  md:mb-5 md:text-xl">
            {friendsItem.title}
          </h3>
          <p className="text-sm text-[rgba(26,26,26,0.5)] mb-2">
            Email:
            <span className="text-sm text-[#262626]">{friendsItem.email}</span>
          </p>
          <p className="text-sm text-[rgba(26,26,26,0.5)] mb-2">
            Address:{" "}
            <span className="text-sm text-[#262626]">
              {friendsItem.address}
            </span>
          </p>
          <p className="text-sm text-[rgba(26,26,26,0.5)]">
            Phone:{" "}
            <span className="text-sm text-[#262626]">{friendsItem.phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendsItem;
