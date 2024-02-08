import { cn } from "@/lib/utils";

import Link from "next/link";

interface ILogoProps {
  light?: boolean;
}

const Logo = ({ light }: ILogoProps) => {
  return (
    <Link
      href="/"
      className={cn("justify-center items-center inline-flex", light && "bg-amber-400")}
    >
      <p
        className={cn(
          "text-neutral-800 text-xl md:text-3xl font-bold leading-7",
          light && "text-white"
        )}
      >
        petl
      </p>
      <svg
        className={cn(
          "fill-amber-400 w-5 h-5 px-0.5 py-0.5 md:py-1 md:w-7 md:h-7 justify-center items-center inline-flex",
          light && "fill-white"
        )}
      >
        <use xlinkHref="/sprite.svg#icon-logo"></use>
      </svg>
      <p
        className={cn(
          "text-neutral-800 text-xl md:text-3xl font-bold leading-7",
          light && "text-white"
        )}
      >
        ve
      </p>
    </Link>
  );
};

export default Logo;
