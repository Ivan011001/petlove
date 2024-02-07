"use client";

import Logo from "@/components/logo";

import UserNav from "./user-nav";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-[24px] md:py-[32px]">
      <Logo />

      <div className="flex items-center gap-[16px] lg:flex-row-reverse">
        <div className="flex items-center gap-[16px]">
          <div className="hidden md:block">
            <UserMenu />
          </div>

          <svg className="w-8 h-8 md:w-9 md:h-9 stroke-black lg:hidden">
            <use xlinkHref="/sprite.svg#icon-menu"></use>
          </svg>
        </div>

        <div className="hidden lg:block">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
