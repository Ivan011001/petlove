"use client";

import { useAppSelector } from "@/state/hooks";
import { selectUserImage, selectUserName } from "@/state/auth/authSelectors";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface IUserBarProps {
  light?: boolean;
}

const UserBar = ({ light }: IUserBarProps) => {
  const userName = useAppSelector(selectUserName);
  const userAvatar = useAppSelector(selectUserImage);

  const isAvatar = userAvatar.length > 0;

  return (
    <div className="flex gap-2 items-center">
      <Link
        href="/profile"
        className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-yellow-50 rounded-full"
      >
        {isAvatar ? (
          <Image
            src={userAvatar}
            alt={userName}
            width={50}
            height={50}
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover rounded-full"
          />
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 stroke-amber-400">
            <use xlinkHref="/sprite.svg#icon-user"></use>
          </svg>
        )}
      </Link>

      <p
        className={cn(
          "hidden md:block text-neutral-800 text-xl font-bold leading-tight",
          light && "text-white"
        )}
      >
        {userName}
      </p>
    </div>
  );
};

export default UserBar;
