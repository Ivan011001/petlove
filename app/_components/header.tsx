"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";

import { selectIsLoggedIn } from "@/state/auth/authSelectors";
import { current } from "@/state/auth/authOperations";

import Logo from "@/components/logo";
import LogoutModal from "@/components/logout-modal";

import Nav from "./nav";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import UserNav from "./user-nav";
import AuthNav from "./auth-nav";

import { cn } from "@/lib/utils";

interface IHeaderProps {
  light?: boolean;
}

const Header = ({ light }: IHeaderProps) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <header
      className={cn(
        "flex justify-between items-center py-[24px] md:py-[32px] lg:relative",
        !light && "container"
      )}
    >
      <Logo light={light} />

      <div className="flex items-center gap-[16px] lg:flex-row-reverse">
        <div className="flex items-center gap-[16px] lg:gap-0">
          {isLoggedIn ? (
            <UserNav light={light} />
          ) : (
            <div className="hidden lg:block">
              <AuthNav />
            </div>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <svg
                  className={cn(
                    "w-8 h-8 md:w-9 md:h-9 stroke-black lg:hidden",
                    light && "stroke-white"
                  )}
                >
                  <use xlinkHref="/sprite.svg#icon-menu"></use>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="h-full flex flex-col justify-between">
                <div className="flex flex-grow justify-center items-center">
                  <Nav />
                </div>

                {isLoggedIn ? (
                  <div className="md:hidden w-full">
                    <LogoutModal mobile />
                  </div>
                ) : (
                  <AuthNav />
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:block lg:absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
          <Nav light={light} />
        </div>
      </div>
    </header>
  );
};

export default Header;
