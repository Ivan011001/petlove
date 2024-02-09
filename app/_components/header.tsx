"use client";

import Logo from "@/components/logo";

import Nav from "./nav";
import UserNav from "./user-nav";
import AuthNav from "./auth-nav";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

interface IHeaderProps {
  light?: boolean;
}

const Header = ({ light }: IHeaderProps) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center py-[24px] md:py-[32px]",
        !light && "container"
      )}
    >
      <Logo light={light} />

      <div className="flex items-center gap-[16px] lg:flex-row-reverse">
        <div className="flex items-center gap-[16px] lg:gap-0">
          <div className="lg:hidden">
            <UserNav light={light} />
          </div>
          <div className="hidden lg:block">
            <AuthNav />
          </div>

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

                <AuthNav />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:block">
          <Nav light={light} />
        </div>
      </div>
    </header>
  );
};

export default Header;
