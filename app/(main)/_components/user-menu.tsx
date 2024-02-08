import Link from "next/link";

import { cn } from "@/lib/utils";

interface IUserMenuProps {
  light?: boolean;
}

const UserMenu = ({ light }: IUserMenuProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Link
        href="/profile"
        className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-yellow-50 rounded-full"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 stroke-amber-400">
          <use xlinkHref="/sprite.svg#icon-user"></use>
        </svg>
      </Link>

      <p
        className={cn(
          "hidden md:block text-neutral-800 text-xl font-bold  leading-tight",
          light && "text-white"
        )}
      >
        Name
      </p>
    </div>
  );
};

export default UserMenu;
