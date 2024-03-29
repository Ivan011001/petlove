import { useState } from "react";
import { cn } from "@/lib/utils";

interface LinkListProps {
  selected: string;
  onSelectedChange: (newSelected: string) => void;
}

const ListLinks = ({ selected, onSelectedChange }: LinkListProps) => {
  return (
    <ul className="flex items-center mb-5 lg:mb-8">
      <li className="mr-2.5">
        <label
          className={cn(
            "group p-3 md:py-3.5 h-[42px] md:h-12 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex hover:bg-accent cursor-pointer transition-all duration-300",
            selected === "favorites" && "bg-accent"
          )}
        >
          <input
            type="radio"
            name="list"
            className="hidden"
            value="favorites"
            onChange={() => onSelectedChange("favorites")}
            checked={selected === "favorites"}
          />
          <span
            className={cn(
              "text-neutral-800 text-inherit text-sm md:text-base font-medium leading-none md:leading-tight group-hover:text-white transition-all duration-300",
              selected === "favorites" && "text-white"
            )}
          >
            My favorite pets
          </span>
        </label>
      </li>

      <li>
        <label
          className={cn(
            "group p-3 md:py-3.5 h-[42px] md:h-12 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex hover:bg-accent cursor-pointer transition-all duration-300",
            selected === "viewed" && "bg-accent"
          )}
        >
          <input
            type="radio"
            name="list"
            className="hidden"
            value="viewed"
            onChange={() => onSelectedChange("viewed")}
            checked={selected === "viewed"}
          />
          <span
            className={cn(
              "text-neutral-800 text-inherit text-sm md:text-base font-medium leading-none md:leading-tight group-hover:text-white transition-all duration-300",
              selected === "viewed" && "text-white"
            )}
          >
            Viewed
          </span>
        </label>
      </li>
    </ul>
  );
};

export default ListLinks;
