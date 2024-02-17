"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface INavProps {
  light?: boolean;
}

const navList = [
  { title: "News", link: "/news" },
  { title: "Find Pet", link: "/notices" },
  { title: "Our Friends", link: "/friends" },
];

const Nav = ({ light }: INavProps) => {
  const path = usePathname();

  return (
    <nav className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
      {navList.map((nav) => {
        return (
          <Link
            key={nav.link}
            className={cn(
              "w-28 lg:w-auto hover:border-amber-400 transition-all duration-300 py-[15px] lg:px-5 rounded-3xl border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex",
              light &&
                "lg:border-white lg:border-opacity-40 hover:border-white",
              path === nav.link && "border-amber-400 border-opacity-100"
            )}
            href={nav.link}
          >
            <p
              className={cn(
                "text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight",
                light && "lg:text-white"
              )}
            >
              {nav.title}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
