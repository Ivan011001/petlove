"use client";

import StoreProvider from "@/providers/store-provider";

import Logo from "@/components/logo";

import UserNav from "./user-nav";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-5 m-auto px-[60px] ">
      <Logo />

      <UserNav />

      <StoreProvider>
        <UserMenu />
      </StoreProvider>
    </header>
  );
};

export default Header;
