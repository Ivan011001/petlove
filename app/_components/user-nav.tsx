"use client";

import { cn } from "@/lib/utils";

import UserBar from "./user-bar";
import LogoutButton from "./logout-button";

interface IUserNavProps {
  light?: boolean;
}

const UserNav = ({ light }: IUserNavProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:block">
        <div className={cn("", light && "hidden")}>
          <LogoutButton />
        </div>
      </div>
      <UserBar light={light} />
    </div>
  );
};

export default UserNav;
