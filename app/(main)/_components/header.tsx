"use client";

import Logo from "@/components/logo";

import UserNav from "./user-nav";
import UserMenu from "./user-menu";
import UserAuth from "./user-auth";

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
      <Logo filled={light} />

      <div className="flex items-center gap-[16px] lg:flex-row-reverse">
        <div className="flex items-center gap-[16px]">
          <div className="lg:hidden">
            <UserMenu light={light} />
          </div>
          <div className="hidden lg:block">
            <UserAuth />
          </div>

          <Sheet onOpenChange={() => console.log(1)}>
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
                  <UserNav />
                </div>

                <UserAuth />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:block">
          <UserNav light={light} />
        </div>
      </div>
    </header>
  );
};

export default Header;
