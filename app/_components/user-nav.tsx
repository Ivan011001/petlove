"use client";

import { cn } from "@/lib/utils";

import UserBar from "./user-bar";
import LogoutModal from "@/components/logout-modal";

interface IUserNavProps {
  light?: boolean;
}

const UserNav = ({ light }: IUserNavProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:block">
        <div className={cn("", light && "hidden")}>
          <LogoutModal />
        </div>
      </div>
      <UserBar light={light} />
    </div>
  );
};

export default UserNav;
